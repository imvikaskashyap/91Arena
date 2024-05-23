import React from 'react';

const PhoneFinderContainer = () => {
  const smartphones = [
    'iPhone 13',
    'Samsung Galaxy S21',
    'Google Pixel 6',
    'OnePlus 9',
    'Xiaomi Mi 11',
    'Sony Xperia 5',
    'Nokia 8.3',
    'Huawei P40',
    'LG Velvet',
    'Asus ROG Phone 5',
  ];

  return (
    <div className="phone-finder-container borderCss w-1/2 p-4">
      <h1 className="text-xl font-bold mb-4">Phone Finder</h1>
      <div className="grid grid-cols-3 gap-4">
        {smartphones.map((phone, index) => (
          <button key={index} className="phone-item p-2 border rounded bg-gray-100 hover:bg-gray-200">
            {phone}
          </button>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button className="show-all-btn p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Show All
        </button>
        <button className="find-mobile-btn p-2 bg-green-500 text-white rounded hover:bg-green-600">
          Find a Mobile
        </button>
      </div>
    </div>
  );
}

export default PhoneFinderContainer;
