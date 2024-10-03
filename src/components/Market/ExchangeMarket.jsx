import React from 'react';
import MarketGraph from './MarketGraph';

const ExchangeMarket = () => {
    return (
        <div className="pb-2">
        <div className="bg-menuDark p-6 rounded-lg shadow-lg text-white">
            <h1 className="text-2xl font-bold mb-4">Market</h1>     
            <MarketGraph />
        </div>
        </div>
    );
};

export default ExchangeMarket;
