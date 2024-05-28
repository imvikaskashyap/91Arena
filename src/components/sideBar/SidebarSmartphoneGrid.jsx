'use client'
import React from 'react';
import { Button } from "@/components/ui/button";
import SidebarPhoneConatainer from './SidebarPhoneConatainer';

const SidebarSmartphoneGrid = ({ smartphones, title }) => {
  return (
    <div className="w-full p-4 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <Button className="underline" variant="link">View all</Button>
      </div>
      <div className="flex flex-wrap gap-2 items-center justify-center">
      {smartphones.slice(0, 6).map((smartphone) => (
            <SidebarPhoneConatainer key={smartphone.id} smartphone={smartphone} />
          ))}

      </div>
    </div>
  );
};

export default SidebarSmartphoneGrid;
