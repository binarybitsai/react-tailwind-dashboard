import React, { useState } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const ScrapecarStats = () => {
  const data = [
    { name: 'Toyota', value: 45000, color: '#1a365d' },
    { name: 'Honda', value: 35000, color: '#2563eb' },
    { name: 'BMW', value: 28000, color: '#60a5fa' },
    { name: 'Mercedes', value: 25000, color: '#93c5fd' },
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);
  const [hoveredData, setHoveredData] = useState(null);

  const handleMouseEnter = (data) => {
    setHoveredData(data);
  };

  const handleMouseLeave = () => {
    setHoveredData(null);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl border p-6 h-full flex flex-col md:flex-row">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Current Scrape Cars</h3>
          <p className="text-sm text-gray-600">Scraping Cars by Company</p>
        </div>

        <div className="relative flex justify-center items-center ml-[-6px]">
          <PieChart width={280} height={280}>
            <Pie
              data={data}
              cx={140}
              cy={140}
              innerRadius={60}
              outerRadius={100}
              paddingAngle={0} // No spacing between slices
              dataKey="value"
              isAnimationActive={false} // Disable animation
              onMouseEnter={(e, index) => handleMouseEnter(data[index])}
              onMouseLeave={handleMouseLeave}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>

          <div className="absolute top-1/2  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-sm text-gray-600">
              {hoveredData ? hoveredData.name : 'Total'}
            </p>
            <p className="text-2xl font-bold text-gray-900">
              {hoveredData ? hoveredData.value.toLocaleString() : total.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="grid  grid-cols-2 gap-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <div>
                <p className="text-sm font-medium text-gray-900">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrapecarStats;
