'use client'
import Image from 'next/image';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

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
      <div className="overlay w-24 h-12 m-auto border rounded absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex space-x-2 bg-white bg-opacity-70 p-2 rounded-md">
          <div className="relative">
            <a
              className="cursor-pointer p-1  text-green-500 hover:text-gray-800 hoverTooltip"
              style={{ fontSize: "6px" }}
            >
              <FavoriteBorderOutlinedIcon style={{ fontSize: "15px" }}/>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max bg-gray-800 text-white text-xs rounded-md py-1 px-2 tooltipText">
                Add to Wishlist
              </span>
            </a>
          </div>
          <div className="relative">
            <a
              className="cursor-pointer p-1 text-green-500 hover:text-gray-800 hoverTooltip"
              style={{ fontSize: "6px" }}
            >
              <CompareArrowsOutlinedIcon style={{ fontSize: "15px" }}/>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max bg-gray-800 text-white text-xs rounded-md py-1 px-2 tooltipText">
                Compare
              </span>
            </a>
          </div>
          <div className="relative">
            <a
              className="cursor-pointer p-1 text-green-500 hover:text-gray-800 hoverTooltip"
              style={{ fontSize: "6px" }}
            >
              <RemoveRedEyeOutlinedIcon style={{ fontSize: "15px" }}/>
              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max bg-gray-800 text-white text-xs rounded-md py-1 px-2 tooltipText">
                Quick View
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-3">
        <h3 className="text-sm sm:text-lg font-semibold">{smartphone.name}</h3>
        <p className="text-gray-500 text-xs sm:text-sm">{smartphone.price}</p>
      </div>
    </div>
  );
};

export default SmartphoneCard;
