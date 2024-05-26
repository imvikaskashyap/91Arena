'use client'
import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react';

const Seekbar = () => {
  const [values, setValues] = useState([1000, 60000]);
  const MIN = 1000;
  const MAX = 60000;

  const handleChange = (values) => {
    setValues(values);
  };

  const handleInputChange = (index, value) => {
    const newValue = parseInt(value, 10);
    if (isNaN(newValue)) {
      return;
    }
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
  };

  return (
    <div className="flex flex-col items-center w-full h-full p-4">
      <h2 className="text-xl font-bold mb-4">Select Range</h2>
      <div className="w-full">
        <Range
          values={values}
          step={100}
          min={MIN}
          max={MAX}
          onChange={handleChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="h-2 w-full rounded-md"
              style={{
                background: getTrackBackground({
                  values,
                  colors: ['#ccc','#000',  '#ccc'],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ index, props }) => (
            <div
              {...props}
              className="h-4 w-4 bg-black rounded-full shadow-md flex justify-center items-center"
              style={{ ...props.style }}
            >
              <div className="w-1 h-6 bg-white transform rotate-45"></div>
            </div>
          )}
        />
       
       <div className='flex justify-between items-center  mt-8'>
       Rs. 
        <Input
          type="number"
          value={values[0]}
          onChange={(e) => handleInputChange(0, e.target.value)}
          className="w-1/2 p-2 border rounded"
        />
        <p className='mx-10 '>to</p>
        Rs. 
        <Input
          type="number"
          value={values[1]}
          onChange={(e) => handleInputChange(1, e.target.value)}
          className="w-1/2 p-2 border rounded"
        />
       </div>
       <div className="flex justify-center items-center mt-8">
        <Button className="w-44">Lets Find   <ChevronRight className="h-4 w-4" /></Button>
        </div>
      </div>
    </div>
  );
}

export default Seekbar;
