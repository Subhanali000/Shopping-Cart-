import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Payment = () => {
  const { cartItems, clearCart } = useCart(); // ⬅ Add clearCart here
  const [isProcessing, setIsProcessing] = useState(false);

  const total = cartItems && cartItems.length > 0
    ? cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0)
    : 0;

  const handlePayment = () => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      clearCart(); // ⬅ Clear the cart here
      alert("Your payment was successful!");
    }, 2000);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Payment</h2>
      <p>Total Amount: <strong>${total.toFixed(2)}</strong></p>
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handlePayment}
        disabled={isProcessing}
      >
        {isProcessing ? "Payment in Progress..." : "Pay Now"}
      </button>
      {isProcessing && (
        <p className="mt-4 text-gray-600">Your payment is in progress...</p>
      )}
    </div>
  );
};

export default Payment;
