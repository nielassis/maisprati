import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TailwindSkeleton from "./TailwindSkeleton";

export default function ProductCardsTailwind({ products = [] }) {
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    return stored.map((item) => item.id);
  });

  const navigate = useNavigate();
  const skeletonArray = Array(5).fill(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  const handleToggleCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    let updatedCart;

    if (cart.find((item) => item.id === product.id)) {
      updatedCart = cart.filter((item) => item.id !== product.id);
    } else {
      updatedCart = [...cart, product];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setFavorites(updatedCart.map((item) => item.id));
  };

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {isLoading
        ? skeletonArray.map((_, index) => <TailwindSkeleton key={index} />)
        : products.slice(0, 5).map((product) => {
            const discount = product.discountPercentage > 0;
            const isNew = product.rating >= 4.5;
            const hasRating = product.rating > 0;
            const isFavorited = favorites.includes(product.id);

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col relative transform transition-transform hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={() => handleCardClick(product.id)}
                aria-label={`Ver detalhes do produto ${product.title}`}
              >
                <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
                  {discount && (
                    <span className="text-xs font-bold bg-[#4B3EC4] px-2 py-0.5 border border-violet-900 rounded-full">
                      {product.discountPercentage.toFixed(0)}% OFF
                    </span>
                  )}
                  {isNew && !discount && (
                    <span className="text-xs font-bold text-blue-600 px-2 py-0.5 border border-blue-600 rounded-full">
                      NOVO
                    </span>
                  )}
                </div>

                <img
                  src={product.images?.[0] || product.thumbnail || ""}
                  alt={product.title || "Produto"}
                  className="w-full h-48 object-contain bg-gray-50"
                />

                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-sm font-semibold mb-1 line-clamp-2">
                    {product.title || "Sem título"}
                  </h3>
                  <p className="text-gray-600 text-xs line-clamp-2 mb-2">
                    {product.description || "Sem descrição"}
                  </p>

                  {hasRating && (
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`text-emerald-900 text-sm ${
                            i < Math.round(product.rating)
                              ? ""
                              : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                      <span className="text-gray-500 text-xs">
                        ({product.rating})
                      </span>
                    </div>
                  )}

                  <div className="mt-auto flex items-center justify-between gap-2">
                    <div className="flex flex-col">
                      {discount ? (
                        <div className="flex gap-2 items-baseline">
                          <span className="text-lg font-bold text-gray-900">
                            $
                            {(
                              product.price *
                              (1 - product.discountPercentage / 100)
                            ).toFixed(2)}
                          </span>
                          <span className="text-xs text-gray-400 line-through">
                            ${product.price.toFixed(2)}
                          </span>
                        </div>
                      ) : (
                        <span className="text-lg font-bold text-gray-900">
                          ${product.price.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleCart(product);
                        }}
                        className={`p-2 transition-colors ${
                          isFavorited
                            ? "text-purple-700"
                            : "text-gray-700 hover:text-purple-700"
                        }`}
                        aria-label={
                          isFavorited
                            ? `Remove ${product.title} of favorites`
                            : `Add ${product.title} to favorites`
                        }
                      >
                        ♥
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
}
