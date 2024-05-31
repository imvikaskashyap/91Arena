// pages/smartphones.js
import React from 'react';
import SmartphoneCard from './SmartphonesCard';
import { PaginationDemo } from './pagination';

const smartphones = [
    {
      id: 1,
      name: "Phone 1",
      price: "$500",
      image: "/assets/images/3459.png_1200-removebg-preview.png",
    },
    {
      id: 2,
      name: "Phone 2",
      price: "$600",
      image: "/assets/images/3459.png_1200-removebg-preview.png",
    },
    {
      id: 3,
      name: "Phone 3",
      price: "$700",
      image: "/assets/images/3459.png_1200-removebg-preview.png",
    },
    {
      id: 4,
      name: "Phone 4",
      price: "$800",
      image: "/assets/images/3459.png_1200-removebg-preview.png",
    },
    {
      id: 5,
      name: "Phone 5",
      price: "$900",
      image: "/assets/images/3459.png_1200-removebg-preview.png",
    },
    {
      id: 6,
      name: "Phone 6",
      price: "$1000",
      image: "/assets/images/3459.png_1200-removebg-preview.png",
    },
    {
      id: 7,
      name: "Phone 7",
      price: "$1100",
      image: "/assets/images/3459.png_1200-removebg-preview.png",
    },
    {
      id: 8,
      name: "Phone 8",
      price: "$1200",
      image: "/assets/images/3459.png_1200-removebg-preview.png",
    },
    {
      id: 9,
      name: "Phone 10",
      price: "$1300",
      image: "/assets/images/3459.png_1200-removebg-preview.png",
    },
    {
      id: 10,
      name: "Phone 11",
      price: "$1300",
      image: "/assets/images/3459.png_1200-removebg-preview.png",
    },
    {
      id: 11,
      name: "Phone 12",
      price: "$1300",
      image: "/assets/images/3459.png_1200-removebg-preview.png",
    },
    {
      id: 12,
      name: "Phone 13",
      price: "$1300",
      image: "/assets/images/3459.png_1200-removebg-preview.png",
    },
    {
        id: 13,
        name: "Phone 6",
        price: "$1000",
        image: "/assets/images/3459.png_1200-removebg-preview.png",
      },
      {
        id: 14,
        name: "Phone 7",
        price: "$1100",
        image: "/assets/images/3459.png_1200-removebg-preview.png",
      },
      {
        id: 15,
        name: "Phone 8",
        price: "$1200",
        image: "/assets/images/3459.png_1200-removebg-preview.png",
      },
      {
        id: 16,
        name: "Phone 10",
        price: "$1300",
        image: "/assets/images/3459.png_1200-removebg-preview.png",
      },
      {
        id: 17,
        name: "Phone 11",
        price: "$1300",
        image: "/assets/images/3459.png_1200-removebg-preview.png",
      },
      {
        id: 18,
        name: "Phone 12",
        price: "$1300",
        image: "/assets/images/3459.png_1200-removebg-preview.png",
      },
      {
        id: 19,
        name: "Phone 13",
        price: "$1300",
        image: "/assets/images/3459.png_1200-removebg-preview.png",
      },
  ];

const SmartphonesGrid = () => {
  return (
    <div className="container px-0 lg:px-8 m-0 lg:mx-auto py-8 borderCss mt-4">
      <h1 className="text-2xl font-bold mb-6 text-center">All Smartphones</h1>
      <div className="flex flex-wrap justify-center gap-1">
        {smartphones.map(smartphone => (
          <SmartphoneCard key={smartphone.id} smartphone={smartphone} />
        ))}
      </div>
      <div className='mt-6'>
        <PaginationDemo/>
      </div>
    </div>
  );
};

export default SmartphonesGrid;
