"use client";

import { useRef } from "react";
import React from "react";
import Image from "next/image";
import { productData } from "../../lib/data";

type ProductCardProps = (typeof productData)[number];

export default function Product({
  id,
  name,
  price,
  imageUrl,
  description,
}: ProductCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className="group mb-3 sm:mb-8 last:mb-0 mx-8">
      <section className="bg-gray-100 max-w-[40rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[30rem] hover:bg-gray-200 transition sm:group-even:pl-8">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] h-full sm:group-even:ml-[18rem] z-10">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        </div>
        <Image
          src={imageUrl}
          alt="Chili Oil"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[23rem] rounded-t-lg shadow-2xl 
          transition-transform
          group-hover:scale-105
          group-hover:-translate-x-3
          group-hover:-translate-y-3
          group-hover:-rotate-2
          
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2
          
          group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </div>
  );
}
