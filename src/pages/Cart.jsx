import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Please add products to your cart before proceeding to checkout.");
    } else {
      navigate("/payment"); 
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="text-blue-500">Go back to shopping</Link></p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>{item.name}</div>
              <div className="flex items-center space-x-2">
                <button onClick={() => decrementQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementQuantity(item.id)}>+</button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Checkout button */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleCheckout}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
