import React, { useState } from 'react';
import Wallet from "../components/Wallet.jsx";
import ExchangeMarket from "../components/Market/ExchangeMarket.jsx";
import Rating from "../components/Rating.jsx";
import NotificationPopup from "../components/Popup/NotificationPopup.jsx";
import HomeHeader from "../components/Header/HomeHeader.jsx"

const Home = () => {
  const [activeTab, setActiveTab] = useState('Favorites');

  return (
    <div>
      <NotificationPopup/>
      <Wallet/>
      <ExchangeMarket/>
      <Rating activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default Home