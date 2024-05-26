'use client'
import React, { useState } from 'react';
// import { useRouter } from 'next/router';
import { Badge } from "@/components/ui/badge"

const PriceSearch = () => {
  const prices = [5000, 10000, 15000, 20000, 25000, 30000];
//   const router = useRouter();

  const handlePriceClick = (price) => {
    // router.push(`/phones?price=${price}`);
  };

  return (
    <div className="flex flex-col w-full p-4">
      <h2 className="text-xl font-bold mb-4 text-left">Search by Price</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        {prices.map((price) => (
          <Badge
          variant="outline"
            key={price}
            onClick={() => handlePriceClick(price)}
            className="cursor-pointer"
            
          >
           Rs. {price}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default PriceSearch;
