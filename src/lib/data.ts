import React from "react";
import four from "/Users/aj/projects/DentoDreamFoods/src/app/components/images/4oz.png";
import eight from "/Users/aj/projects/DentoDreamFoods/src/app/components/images/8oz.png";
import sixteen from "/Users/aj/projects/DentoDreamFoods/src/app/components/images/16oz.png";

export const productData = [
  {
    id: 1,
    name: "Chili Oil 4oz",
    imageUrl: four,
    price: 25,
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Chili Oil 8oz",
    imageUrl: eight,
    price: 30,
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    imageUrl: sixteen,
    name: "Chili Oil 16oz",
    price: 35,
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
] as const;
