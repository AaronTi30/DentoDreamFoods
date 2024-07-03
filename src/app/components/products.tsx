"use client";

import React from "react";
import { productData } from "../../lib/data";
import Product from "./productCard";

export default function Products() {
  return (
    <section className="scroll-mt-28 mb-28">
      <h1>Products for sale</h1>
      <div className="grid grid-cols-3 gap-4">
        {productData.map((product, index) => (
          <React.Fragment key={index}>
            <Product {...product} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
