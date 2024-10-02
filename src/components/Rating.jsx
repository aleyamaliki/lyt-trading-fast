import React, { useState } from 'react';
import { cryptoData } from '../dummyData/cryptoData';
import CryptoList from './Crypto/CryptoList';
import RatingTabBar from './TabBar/RatingTabBar';
import RatingCryptoList from './Crypto/RatingCryptoList';

// Define tab titles separately
const tabTitles = [
    'Favorites',
    'Top',
    'Popular',
    'Token Price',
    'New Token'
];

const Rating = () => {
    const [activeTab, setActiveTab] = useState('Favorites');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const filteredData = cryptoData; 

    return (
        <div className="pb-4">
        <div className="bg-menuDark p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-white">⭐Cryptex Rating</h1>
            <RatingTabBar 
                tabs={tabTitles}
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />
            <RatingCryptoList cryptoData={filteredData} />
        </div>
        </div>
    );
};

export default Rating;
