import React, { useEffect, useState } from "react";
import "../../components/GlobalCssComponents/Favorites.css";

export default function Favorites() {
  const [cart, setCart] = useState([]);
  const [totals, setTotals] = useState({
    subtotal: 0,
    shipping: 50,
    tax: 0,
    total: 0,
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    calculateTotals(storedCart);
  }, []);

  const calculateTotals = (cartItems) => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const tax = subtotal * 0.2;
    const total = subtotal + tax + totals.shipping;
    setTotals({ subtotal, shipping: 50, tax, total });
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
    calculateTotals(updatedCart);
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="product-info">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="product-img"
              />
              <div>
                <h3 className="product-title">{item.title}</h3>
                <p className="description">{item.description}</p>{" "}
                <p className="price">
                  ${item.price.toFixed(2)}{" "}
                  {item.discountPercentage > 0 && (
                    <span className="original-price">
                      $
                      {(
                        item.price /
                        (1 - item.discountPercentage / 100)
                      ).toFixed(2)}
                    </span>
                  )}
                </p>
                <p>Stock: {item.stock}</p>
              </div>
            </div>
            <div className="product-actions">
              <button
                className="remove-button"
                onClick={() => removeItem(item.id)}
              >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        <p>Sub Total: ${totals.subtotal.toFixed(2)}</p>
        <p>Shipping: ${totals.shipping.toFixed(2)}</p>
        <p>Tax (20%): ${totals.tax.toFixed(2)}</p>
        <h3>Order Total: ${totals.total.toFixed(2)}</h3>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
}
