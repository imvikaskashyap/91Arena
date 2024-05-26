'use client'
import React from 'react';
import { Button } from "@/components/ui/button";
import SmartphoneCard from './SmartphoneCard';

const SmartphoneGrid = ({ smartphones, title }) => {
  return (
    <div className="w-full p-4 borderCss mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <Button className="underline" variant="link">View all</Button>
      </div>
      <div className="grid gap-1 sm:gap-6 ">
        {/* For small screens, show only 6 smartphones */}
        <div className="block md:hidden grid gap-1 grid-cols-3">
          {smartphones.slice(0, 6).map((smartphone) => (
            <SmartphoneCard key={smartphone.id} smartphone={smartphone} />
          ))}
        </div>
        {/* For medium and larger screens, show all 12 smartphones */}
        <div className="hidden md:grid gap-4  grid-cols-3 lg:grid-cols-6">
          {smartphones.slice(0, 12).map((smartphone) => (
            <SmartphoneCard key={smartphone.id} smartphone={smartphone} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartphoneGrid;
