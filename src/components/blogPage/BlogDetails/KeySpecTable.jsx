// components/KeySpecsTable.js

import { Button } from '@/components/ui/button';
import React from 'react';

const KeySpecsTable = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <table className="min-w-full border-collapse">
        <tbody>
          <tr className="border-b">
            <th className="py-3 px-4 text-left text-gray-500">Model</th>
            <td className="py-3 px-4 text-gray-700">vivo S18</td>
          </tr>
          <tr className="border-b bg-gray-50">
            <th className="py-3 px-4 text-left text-gray-500">Processor</th>
            <td className="py-3 px-4 text-gray-700">Qualcomm Snapdragon 7 Gen 3 | 8 GB</td>
          </tr>
          <tr className="border-b">
            <th className="py-3 px-4 text-left text-gray-500">Display</th>
            <td className="py-3 px-4 text-gray-700">6.78 inches (17.22 cm)</td>
          </tr>
          <tr className="border-b bg-gray-50">
            <th className="py-3 px-4 text-left text-gray-500">Rear Camera</th>
            <td className="py-3 px-4 text-gray-700">50 MP + 8 MP</td>
          </tr>
          <tr className="border-b">
            <th className="py-3 px-4 text-left text-gray-500">Selfie Camera</th>
            <td className="py-3 px-4 text-gray-700">50 MP</td>
          </tr>
          <tr>
            <th className="py-3 px-4 text-left text-gray-500">Battery</th>
            <td className="py-3 px-4 text-gray-700">5000 mAh</td>
          </tr>
        </tbody>
      </table>
      <Button variant="" className="w-full mt-4">See Full Specification</Button>
    </div>
  );
};

export default KeySpecsTable;
