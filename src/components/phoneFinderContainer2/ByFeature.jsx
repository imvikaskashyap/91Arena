'use client'
import React, { useState } from 'react';
// import { useRouter } from 'next/router';
import { Button } from "@/components/ui/button"

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
          <Button
          variant="link"
            key={price}
            onClick={() => handlePriceClick(price)}
            
          >
            {price}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default PriceSearch;
