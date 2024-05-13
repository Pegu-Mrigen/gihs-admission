"use client";
import React, { useState } from "react";

const Product = ({ makePayment }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center mt-[20px]">
      <p>You can make payment to confirm your seat-</p>

      <button
        onClick={() => {
          makePayment({ productId: "example_ebook" });
        }}
        disabled={isLoading}
        className={`bg-blue-500 text-white font-semibold mt-4 py-2 px-4 rounded ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Processing..." : "Book Admission Here!"}
      </button>
    </div>
  );
};

export default Product;
