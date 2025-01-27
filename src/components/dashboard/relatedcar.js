import React from 'react';
import { MdArrowForward } from 'react-icons/md';

export default function Relatedcar() {
  const cars = [
    { name: 'Toyota Camry', price: "$45,000" },
    { name: 'Honda Accord', price: "$45,000" },
    { name: 'BMW X5', price: "$55,000" },
    { name: 'Mercedes Benz', price: "$60,000" },
    { name: 'Audi A4', price: "$50,000" },
    { name: 'Tesla Model 3', price: "$55,000" },
  ];

  return (
    <div className="chart-container bg-white border rounded-2xl p-6 h-full shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Related Cars</h3>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Car Name</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {cars.map((car, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{car.name}</td>
                <td className="px-6 py-4 text-sm text-gray-900 text-right">{car.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-4">
        <button className="flex items-center px-6 py-2 text-gray-600 hover:text-gray-800">
          View All <MdArrowForward className="ml-2" />
        </button>
      </div>
    </div>
  );
}
