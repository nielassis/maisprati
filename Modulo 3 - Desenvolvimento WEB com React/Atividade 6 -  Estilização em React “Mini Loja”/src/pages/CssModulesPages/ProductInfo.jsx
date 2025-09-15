import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../providers/api";
import styles from "../../components/CssModulesComponents/ProductInfo.module.css";

export default function ProductInfo() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    return stored.map((item) => item.id);
  });
  const [isLoading, setIsLoading] = useState(true);

  const isFavorited = product && favorites.includes(product.id);

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);

    getProductById(id)
      .then((data) => setProduct(data))
      .catch((err) => console.error("Erro ao buscar produto:", err))
      .finally(() => {
        const timeout = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timeout);
      });
  }, [id]);

  if (isLoading)
    return (
      <div className={styles.skeletonContainer}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonDetails}></div>
      </div>
    );

  if (!product) return <p>Produto não encontrado</p>;

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

  return (
    <div className={styles.container}>
      <h1 className={styles.title} tabIndex="0">
        {product.title}
      </h1>

      <section className={styles.details}>
        <div className={styles.imageWrapper}>
          <img
            src={product.images?.[0] || product.thumbnail}
            alt={product.title}
            className={styles.image}
          />
        </div>
        <div className={styles.info}>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>
            Preço:{" "}
            {product.discountPercentage > 0 ? (
              <>
                <span className={styles.discountedPrice}>
                  $
                  {(
                    product.price *
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </span>{" "}
                <span className={styles.originalPrice}>
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <>${product.price.toFixed(2)}</>
            )}
          </p>
          {product.rating > 0 && (
            <p className={styles.rating}>Avaliação: {product.rating} ★</p>
          )}
          <p className={styles.category}>Categoria: {product.category}</p>
          {product.tags && product.tags.length > 0 && (
            <p className={styles.tags}>Tags: {product.tags.join(", ")}</p>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleToggleCart(product);
            }}
            className={`${styles.button} ${
              isFavorited ? styles.favorited : styles.default
            }`}
            aria-label={
              isFavorited
                ? `Remover ${product.title} do carrinho`
                : `Adicionar ${product.title} ao carrinho`
            }
          >
            {isFavorited ? "Remover do carrinho" : "Adicionar ao carrinho"}
          </button>
        </div>
      </section>
    </div>
  );
}
