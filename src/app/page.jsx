import React from "react";
import * as classes from "./homepage.module.css";

export default function StorePage() {
  return (
    <div className={classes["STORE-PAGE"]}>
      <div className="grid grid-cols-3 gap-4">
        <div
          className="w-full h-64 object-cover mb-6 rounded"
          src="/"
          alt="chili oil"
        >
          <h2 className="text-xl font-bold mb-4 text-center">
            Signature Garlic Chili Oil
          </h2>
          <p className="text-gray-700 mb-4 text-center"> 8oz</p>
          <p className="text-lg mb-4 text-center">15$</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to cart
          </button>
        </div>
        <div
          className="w-full h-64 object-cover mb-6 rounded"
          src="/"
          alt="chili oil"
        >
          <h2 className="text-xl font-bold mb-4">Signature Garlic Chili Oil</h2>
          <p className="text-gray-700 mb-4 text-center"> 8oz</p>
          <p className="text-lg mb-4 text-center">20$</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to cart
          </button>
        </div>
        <div
          className="w-full h-64 object-cover mb-6 rounded"
          style={{ backgroundImage: "url(/chili-oil.jpg)" }}
        >
          <h2 className="text-xl font-bold mb-4">Signature Garlic Chili Oil</h2>
          <p className="text-gray-700 mb-4 text-center"> 8oz</p>
          <p className="text-lg mb-4 text-center">25$</p>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
