import React, { useRef } from 'react';
import marketGraphData from '../../dummyData/marketGraphData';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md';

// Register Chart.js components
Chart.register(...registerables);

const MarketGraph = () => {
    const chartRef = useRef(null); // Reference to the chart

    // Predefined colors for each graph
    const colors = [
        { borderColor: '#25c866', gradientStart: 'rgba(37, 200, 102, 0.5)', gradientEnd: 'rgba(37, 200, 102, 0)' },
        { borderColor: '#ff6384', gradientStart: 'rgba(255, 99, 132, 0.5)', gradientEnd: 'rgba(255, 99, 132, 0)' },
        { borderColor: '#36a2eb', gradientStart: 'rgba(54, 162, 235, 0.5)', gradientEnd: 'rgba(54, 162, 235, 0)' },
        { borderColor: '#ffce56', gradientStart: 'rgba(255, 206, 86, 0.5)', gradientEnd: 'rgba(255, 206, 86, 0)' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {marketGraphData.map((crypto, index) => {
                // Select color set based on the index (looping through the colors)
                const color = colors[index % colors.length];

                const firstPrice = crypto.priceHistory[0];
                const lastPrice = crypto.priceHistory[crypto.priceHistory.length - 1];
                const percentageChange = ((lastPrice - firstPrice) / firstPrice) * 100;

                // Creating a unique gradient background for each chart
                const gradientBackground = (ctx) => {
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, color.gradientStart); // Top gradient color
                    gradient.addColorStop(1, color.gradientEnd);   // Bottom gradient color (transparent)
                    return gradient;
                };

                const data = {
                    labels: Array.from({ length: crypto.priceHistory.length }, (_, i) => `${i}h`),
                    datasets: [
                        {
                            label: `${crypto.name} Price (${crypto.currency})`,
                            data: crypto.priceHistory,
                            borderColor: color.borderColor, // Unique line color
                            backgroundColor: (context) => {
                                const chart = context.chart;
                                const { ctx } = chart;
                                return gradientBackground(ctx); // Unique gradient background
                            },
                            fill: true, // Ensure the gradient is filled
                        },
                    ],
                };

                const options = {
                    responsive: true,
                    scales: {
                        x: {
                            display: false, // Hide x-axis
                        },
                        y: {
                            display: false, // Hide y-axis
                        },
                    },
                    plugins: {
                        legend: {
                            display: false, // Hide legend
                        },
                    },
                };

                return (
                    <div key={crypto.id} className="bg-menuDark p-4 rounded-lg shadow-md">
                        {/* <div className="flex items-center mb-2">
                            <img src={crypto.logo} alt={`${crypto.name} logo`} className="w-8 h-8 mr-2" />
                            <h2 className="text-lg font-semibold text-white">{crypto.name} ({crypto.currency})</h2>
                        </div> */}
                        <Line data={data} options={options} ref={chartRef} />
                        {/* <div className="flex justify-between items-center mt-2">
                            <p className="text-white">{crypto.balance} {crypto.currency}</p>
                            <div className="flex items-center">
                                <p className={`text-lg ${percentageChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                    {percentageChange.toFixed(2)}%
                                </p>
                                {percentageChange >= 0 ? (
                                    <MdArrowUpward className="text-green-500 ml-1" />
                                ) : (
                                    <MdArrowDownward className="text-red-500 ml-1" />
                                )}
                            </div>
                        </div> */}
                    </div>
                );
            })}
        </div>
    );
};

export default MarketGraph;
