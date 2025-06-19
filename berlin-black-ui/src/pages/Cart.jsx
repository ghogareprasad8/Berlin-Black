import React from "react";

const Cart = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-400">Your cart is empty!</p>
        <button className="mt-6 px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Cart;
