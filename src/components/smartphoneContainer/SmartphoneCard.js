'use client'
import Image from 'next/image';
import Overlay from '../ui/overlay';


const SmartphoneCard = ({ smartphone }) => {
  return (
    <div className="box relative group">
      <Image 
        src={smartphone.image} 
        alt={smartphone.name} 
        width={90} 
        height={200} 
        className="w-full h-32 sm:h-48 object-contain" 
      />
     <Overlay/>
      <div className="flex flex-col items-center justify-center p-3">
        <h3 className="text-sm sm:text-lg font-semibold">{smartphone.name}</h3>
        <p className="text-gray-500 text-xs sm:text-sm">{smartphone.price}</p>
      </div>
    </div>
  );
};

export default SmartphoneCard;
