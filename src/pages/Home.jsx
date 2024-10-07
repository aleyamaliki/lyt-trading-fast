import React, { useState } from 'react';
import Wallet from "../components/Wallet.jsx";
import ExchangeMarket from "../components/Market/ExchangeMarket.jsx";
import Rating from "../components/Rating.jsx";

const Home = () => {
  const [activeTab, setActiveTab] = useState('Favorites');

  return (
    <div>
      <Wallet/>
      <ExchangeMarket/>
      <Rating activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default Home