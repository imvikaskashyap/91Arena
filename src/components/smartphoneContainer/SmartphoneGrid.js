'use client'
import React from 'react';
import SmartphoneCard from './SmartphoneCard';
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";


const SmartphoneGrid = ({ smartphones, title1 }) => {
  return (
    <div className="w-full p-4 borderCss mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title1}</h2>
        <Button className="underline" variant="link">View all </Button>

      </div>
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {smartphones.slice(0, 10).map((smartphone) => (
          <SmartphoneCard key={smartphone.id} smartphone={smartphone} />
        ))}
      </div>
    </div>
  );
};

export default SmartphoneGrid;
