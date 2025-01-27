import React from 'react';
import { MdArrowForward } from 'react-icons/md';

const Carinvoice = () => {
  const invoices = [
    { id: 'INV-1990', category: 'Toyota Camry', price: "$45,000", date: '2025-01-18' },
    { id: 'INV-1991', category: 'Honda Accord', price: "$45,000", date: '2025-01-18' },
    { id: 'INV-1992', category: 'BMW X5', price: "$45,000", date: '2025-01-18' },
    { id: 'INV-1993', category: 'Mercedes Benz', price: "$45,000", date: '2025-01-18' },
    { id: 'INV-1994', category: 'Audi A4', price: "$50,000", date: '2025-01-18' },
    { id: 'INV-1995', category: 'Tesla Model 3', price: "$55,000", date: '2025-01-18' },
  ];

  return (
    <div className="chart-container bg-white border rounded-2xl p-6 h-full shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Cars invoice</h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Invoice ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Category</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Price</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{invoice.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{invoice.category}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{invoice.price}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{invoice.date}</td>
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
};

export default Carinvoice;
