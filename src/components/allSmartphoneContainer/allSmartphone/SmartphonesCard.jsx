import { Button } from '@/components/ui/button';
import Overlay from '@/components/ui/overlay';
import Image from 'next/image';
import React from 'react';

const SmartphoneCard = ({ smartphone }) => {
  return (
    <div className="w-[130px] lg:w-[143px] h-[194px] border product-card overflow-hidden group">
      <div className="relative w-full h-3/4 overflow-hidden">
        <Image 
          src={smartphone.image} 
          alt={smartphone.name} 
          width={143} 
          height={235} 
          className="object-contain transition-transform duration-300 group-hover:scale-110" 
        />
        <Overlay />
      </div>
      <div className="mt-2 text-center">
        {/* <h3 className="text-sm font-semibold">{smartphone.name}</h3>
        <p className="text-sm text-gray-500">${smartphone.price}</p> */}
        <Button className="bg-[#efececb1] hover:bg-[#dedadab1] w-full text-gray-400 text-black rounded-none">
        {smartphone.name} 
        </Button>
      </div>
    </div>
  );
};

export default SmartphoneCard;

// import { Button } from '@/components/ui/button';
// import { ArrowRight } from 'lucide-react';
// import Image from 'next/image';
// import React from 'react';

// const SmartphoneCard = ({ smartphone }) => {
//   return (
//     <article className="card border">
//   <Image
//     className="card__background mx-auto"
//     src={smartphone.image}
//     alt={smartphone.name}
//    width={300}
//    height={300}
//   />
//   <div className="card__content | flow p-2">
//     <div className="card__content--container | flow">
//       <h2 className="card__title specTitle text-center">{smartphone.name}</h2>
//       <span className=" specDetails">
//       {smartphone.price}
//       </span>
//     </div>
// <Button variant="ghost" className="">  <ArrowRight /></Button>
//   </div>
// </article>
//   );
// };

// export default SmartphoneCard;
