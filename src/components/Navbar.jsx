import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const cartItemCount = cartItems.length;

  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <Link to="/" className="text-xl">My Shop</Link>
      <div className="flex space-x-8"> 
      <Link to="/" className="text-2xl">Home</Link>

        <Link to="/cart" className="relative">
          <div className="bg-white p-1 rounded-full shadow-lg">
            <img
              src="/cart.png"
              alt="Cart"
              className="w-8 h-8"
            />
          </div>
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-2 py-1">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
