import SmartphoneContainer from "../smartphoneContainer";
import SidebarSmartphoneGrid from "./SidebarSmartphoneGrid";

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
];

// components/Sidebar.js
export default function SidebarPart2({title}) {
    return (
      <div className=" p-4 my-2 borderCss">
        <div className="mb-4">
         <SidebarSmartphoneGrid smartphones={smartphones} title={title} />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">News & Reviews</h2>
          <ul>
            <li className="mb-2">Review 1</li>
            <li className="mb-2">Review 2</li>
            <li className="mb-2">News 1</li>
            <li className="mb-2">News 2</li>
            {/* Add more news and reviews here */}
          </ul>
        </div>
      </div>
    );
  }
  