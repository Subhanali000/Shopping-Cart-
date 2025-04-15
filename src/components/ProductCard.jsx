import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-md shadow-md bg-white">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)} className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
