import React, { useRef, useEffect, useMemo } from "react";
import { Chart } from "chart.js/auto";

export default function TotalCars() {
  const chartRefs = useRef([]);
  const chartInstances = useRef([]);

  const cardData = useMemo(
    () => [
      {
        title: "Total Cars",
        value: "18,765",
        change: "+2.6% last 7 days",
        changeColor: "text-green-500",
        chartData: [15, 18, 12, 51, 68, 11, 39, 37],
        chartColor: "#0c68e9",
      },
      {
        title: "Total Car Models",
        value: "4,876",
        change: "+0.2% last 7 days",
        changeColor: "text-green-500",
        chartData: [20, 41, 33, 63, 28, 35, 50, 46],
        chartColor: "#9ec3f6",
      },
      {
        title: "Total Cars Scrape",
        value: "678",
        change: "-0.1% last 7 days",
        changeColor: "text-red-500",
        chartData: [18, 19, 31, 8, 16, 37, 15, 33],
        chartColor: "#FF5733",
      },
    ],
    [] // Dependencies array; only re-create if dependencies change
  );

  useEffect(() => {
    // Destroy existing charts to avoid duplication
    chartInstances.current.forEach((chart) => chart?.destroy());
    chartInstances.current = [];

    // Create new charts
    cardData.forEach((data, index) => {
      if (chartRefs.current[index]) {
        const ctx = chartRefs.current[index];
        const chart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
            datasets: [
              {
                data: new Array(data.chartData.length).fill(0), // Start with 0
                backgroundColor: data.chartColor,
                borderRadius: 5,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              duration: 1000, // Animation duration in milliseconds
              easing: "easeOutQuart", // Animation easing function
              onProgress: (animation) => {
                // Update chart data progressively
                chart.data.datasets[0].data = data.chartData.map((value, index) => {
                  return (value * animation.currentStep) / animation.numSteps;
                });
                chart.update();
              },
            },
            plugins: {
              legend: { display: false },
            },
            scales: {
              x: {
                display: false,
                grid: { display: false },
              },
              y: {
                display: false,
                grid: { display: false },
              },
            },
          },
        });
        chartInstances.current.push(chart);
      }
    });

    // Cleanup on component unmount
    return () => {
      chartInstances.current.forEach((chart) => chart?.destroy());
    };
  }, [cardData]);

  return (
    <>
      {cardData.map((card, index) => (
        <div key={index} className="col-span-12 md:col-span-4">
          <div className="bg-white shadow-lg border rounded-2xl p-6 h-full flex flex-col md:flex-row items-center justify-between">
            {/* Card Content */}
            <div className="flex-1 mb-4 md:mb-0 order-1">
              <h3 className="text-lg text-black mb-0">{card.title}</h3>
              <h3 className="text-3xl font-bold text-black mt-3">{card.value}</h3>
              <div className="flex items-center mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className={`w-6 h-6 ${card.changeColor} mr-2 ${card.change.startsWith("-") ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M5 17.75a.75.75 0 0 1-.488-1.32l7-6a.75.75 0 0 1 .976 0l7 6A.75.75 0 0 1 19 17.75z"
                    opacity=".5"
                  ></path>
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M4.43 13.488a.75.75 0 0 0 1.058.081L12 7.988l6.512 5.581a.75.75 0 1 0 .976-1.138l-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.081 1.057"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="text-lg text-black">{card.change}</p>
              </div>
            </div>

            {/* Chart */}
            <div className="w-full md:w-1/4 h-32 md:h-1/2 order-2">
              <canvas ref={(el) => (chartRefs.current[index] = el)}></canvas>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
