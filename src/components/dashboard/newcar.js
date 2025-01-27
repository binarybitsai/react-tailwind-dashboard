import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Newcar() {
    const [selectedYear, setSelectedYear] = useState("2022");
    const [isMobile, setIsMobile] = useState(false);

    const handleChange = (e) => {
        setSelectedYear(e.target.value);
    };

    // Detect mobile view using window.innerWidth
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Mobile size threshold
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Check on mount

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const yearlyData = {
        "2022": [
            {
                label: "Toyota",
                data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16],
                backgroundColor: "#063ba7",
                borderWidth: 1,
                barThickness: isMobile ? 12 : 18, // Adjust bar thickness for mobile
            },
            {
                label: "BMW",
                data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16],
                backgroundColor: "#ffab00",
                borderWidth: 1,
                barThickness: isMobile ? 12 : 18,
            },
            {
                label: "Mercedes",
                data: [12, 10, 18, 22, 20, 12, 8, 21, 20, 14, 15, 16],
                backgroundColor: "#00b8d9",
                borderWidth: 1,
                barThickness: isMobile ? 12 : 18,
            },
        ],
        "2023": [
            {
                label: "Toyota",
                data: [6, 18, 14, 9, 20, 6, 22, 19, 8, 22, 8, 17],
                backgroundColor: "#063ba7",
                borderWidth: 1,
                barThickness: isMobile ? 12 : 18,
            },
            {
                label: "BMW",
                data: [6, 18, 14, 9, 20, 6, 22, 19, 8, 22, 8, 17],
                backgroundColor: "#ffab00",
                borderWidth: 1,
                barThickness: isMobile ? 12 : 18,
            },
            {
                label: "Mercedes",
                data: [6, 18, 14, 9, 20, 6, 22, 19, 8, 22, 8, 17],
                backgroundColor: "#00b8d9",
                borderWidth: 1,
                barThickness: isMobile ? 12 : 18,
            },
        ],
        "2024": [
            {
                label: "Toyota",
                data: [6, 20, 15, 18, 7, 24, 6, 10, 12, 17, 18, 10],
                backgroundColor: "#063ba7",
                borderWidth: 1,
                barThickness: isMobile ? 12 : 18,
            },
            {
                label: "BMW",
                data: [6, 20, 15, 18, 7, 24, 6, 10, 12, 17, 18, 10],
                backgroundColor: "#ffab00",
                borderWidth: 1,
                barThickness: isMobile ? 12 : 18,
            },
            {
                label: "Mercedes",
                data: [6, 20, 15, 18, 7, 24, 6, 10, 12, 17, 18, 10],
                backgroundColor: "#00b8d9",
                borderWidth: 1,
                barThickness: isMobile ? 12 : 18,
            },
        ],
    };

    const data = {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: yearlyData[selectedYear],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "top",
                labels: {
                    usePointStyle: true,
                    pointStyle: "circle",
                    boxWidth: 8,
                    boxHeight: 8,
                },
                padding: 20,
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
            },
            y: {
                stacked: true,
                border: {
                    display: false,
                },
                grid: {
                    color: "#e9ecef",
                    lineWidth: 1,
                    borderDash: [5, 5],
                    drawBorder: false,
                },
                ticks: {
                    beginAtZero: true,
                },
            },
        },
    };

    return (
        <div className="chart-container bg-white border rounded-2xl p-6 h-full shadow-lg">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">New Cars Available</h3>
                <div className="relative">
                    <select
                        value={selectedYear}
                        onChange={handleChange}
                        className="text-gray-600 hover:text-gray-800 bg-white border-2 border-gray-300 rounded-lg py-2 px-4 pr-8 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                    </select>
                </div>
            </div>
            
            <div style={{ height: "400px", width: "100%" }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}
