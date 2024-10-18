import React, { useState } from 'react'
import { cryptoData } from '../../dummyData/cryptoData';
import TabBar from '../TabBar/TabBar'
import EarnCryptoList from './EarnCryptoList';

// Define tab titles separately
const tabTitles = [
    'Stablecoin',
    'Single Cryptocurrency',
    'Vault',
];

const EarnCrypto = () => {
    const [activeTab, setActiveTab] = useState('Favorites');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const filteredData = cryptoData;

  return (
    <div>
    <div className="bg-surface p-6 rounded-lg shadow-lg">
        <TabBar 
            tabs={tabTitles}
            activeTab={activeTab}
            onTabChange={handleTabChange}
        />
        <EarnCryptoList cryptoData={filteredData} />
    </div>
    </div>
  )
}

export default EarnCrypto