import Head from 'next/head';

export default function PopularPhones() {
  const phones = [
    'Nothing Phone 2a', 'vivo V30', 'realme 12 Pro', 'realme P1', 'OnePlus 12R',
    'iQOO Neo 9 Pro', 'POCO X6 Pro', 'vivo T3', 'iQOO Z9', 'Samsung Galaxy S24 Ultra',
    'Motorola Edge 40 Neo', 'OnePlus 11R', 'OnePlus Nord CE 4 5G', 'realme 12 Plus',
    'realme C65 5G', 'Moto G64', 'Samsung Galaxy A55 5G', 'realme Narzo 70x 5G',
    'Samsung Galaxy M55 5G', 'Samsung Galaxy A35 5G', 'Motorola Edge 50 Pro 5G',
    'realme Narzo 70 Pro', 'Samsung Galaxy F15', 'Xiaomi Redmi Note 13', 
    'Samsung Galaxy F54 5G', 'Samsung Galaxy S23 5G', 'Samsung Galaxy M34', 
    'Samsung Galaxy S23 FE', 'Xiaomi Redmi 12 5G', 'Xiaomi Redmi Note 13 Pro Plus 5G'
  ];

  return (
    <div className="min-h-screen p-4">
     <div className="bottomLine mb-4">
        <span className="specTitle">Popular Phones</span>
        <h2></h2>
      </div>
      <div className="">
        {phones.map((phone, index) => (
          <div
            key={index}
            className="p-1"
          >
            <li className="text-gray-700 font-bold text-sm hover:text-red-500 cursor-pointer">{phone}</li>
          </div>
        ))}
      </div>
    </div>
  );
}
