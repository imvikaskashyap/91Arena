'use client'
import Image from 'next/image';
import React from 'react';

const SmartphoneCard = ({ smartphone }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <Image 
        src={smartphone.image} 
        alt={smartphone.name} 
        width={90} 
        height={200} 
        className="w-full h-32 sm:h-48 object-contain" 
      />
      <div className="flex flex-col items-center justify-center p-3">
        <h3 className="text-lg md:text-sm font-semibold">{smartphone.name}</h3>
        <p className="text-gray-500 md:text-xs">{smartphone.price}</p>
      </div>
    </div>
  );
};

export default SmartphoneCard;
