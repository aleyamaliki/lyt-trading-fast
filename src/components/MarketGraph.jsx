import React from 'react';
import marketGraphData from '../dummyData/marketGraphData'; // Import the dummy data
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'; // Import Chart.js components
import { MdArrowUpward, MdArrowDownward } from 'react-icons/md'; // Import icons

// Register Chart.js components
Chart.register(...registerables);

const Market = () => {
    return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {marketGraphData.map((crypto) => {
                    const data = {
                        labels: Array.from({ length: crypto.priceHistory.length }, (_, i) => `${i}h`),
                        datasets: [
                            {
                                label: `${crypto.name} Price (${crypto.currency})`,
                                data: crypto.priceHistory,
                                borderColor: 'rgba(75, 192, 192, 1)',
                                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                                fill: true,
                            },
                        ],
                    };

                    // Calculate percentage change
                    const firstPrice = crypto.priceHistory[0];
                    const lastPrice = crypto.priceHistory[crypto.priceHistory.length - 1];
                    const percentageChange = ((lastPrice - firstPrice) / firstPrice) * 100;

                    return (
                        <div key={crypto.id} className="bg-menuDark p-4 rounded-lg shadow-md">
                            <div className="flex items-center mb-2">
                                <img src={crypto.logo} alt={`${crypto.name} logo`} className="w-8 h-8 mr-2" />
                                <h2 className="text-lg font-semibold text-white">{crypto.name} ({crypto.currency})</h2>
                            </div>
                            <Line data={data} options={{ responsive: true }} />
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-white">Balance: {crypto.balance} {crypto.currency}</p>
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
                            </div>
                        </div>
                    );
                })}
            </div>
    );
};

export default Market;
