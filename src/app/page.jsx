import React from "react";
import * as classes from "./homepage.module.css";
import ProductCard from "./components/productCard";
import Products from "./components/products";

export default function StorePage() {
  return (
    <div className={classes["STORE-PAGE"]}>
      <Products />
    </div>
  );
}
