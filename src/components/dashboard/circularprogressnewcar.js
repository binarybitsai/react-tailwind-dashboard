import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function CircularProgressNewCar() {
  const [progress, setProgress] = useState(0);
  const total = 100;
  const targetProgress = 80;

  const legendData = [
    { status: 'New Car', count: '80 %', color: '#605cf4' },
    { status: 'Scrap Car', count: '20 %', color: '#cee1fb' },
  ];

  useEffect(() => {
    let progressValue = 0;
    const interval = setInterval(() => {
      if (progressValue < targetProgress) {
        progressValue += 1;
        setProgress(progressValue);
      } else {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white border rounded-xl p-5 shadow-lg flex flex-col items-center justify-center">
      <h3 className="text-lg font-semibold mb-6">Cars Available</h3>
      <div className="w-40 h-60 flex items-center justify-center relative">
        <CircularProgressbar
          value={progress}
          styles={buildStyles({
            pathColor: '#605cf4',
            trailColor: '#cee1fb',
            textSize: '16px',
            pathTransition: 'stroke-dashoffset 0.5s ease 0s',
          })}
        />
        <div className="absolute text-center">
          <p className="text-lg text-gray-500">Total</p>
          <p className="text-2xl font-semibold text-indigo-500">{total}%</p>
        </div>
      </div>
      <div className="mt-4 w-full space-y-2">
        {legendData.map((item, index) => (
          <div key={index} className="flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-600">{item.status}</span>
            </div>
            <span className="text-sm font-semibold text-gray-600">{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
