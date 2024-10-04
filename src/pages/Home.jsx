import React from 'react';
import HomeHeader from "./components/Header/HomeHeader.jsx";
import Wallet from "./components/Wallet.jsx";
import ExchangeMarket from "./components/Market/ExchangeMarket.jsx";
import Rating from "./components/Rating.jsx";
import NotificationPopup from "./components/Popup/NotificationPopup.jsx";

const Home = () => {
  return (
    <div>
        <NotificationPopup/>
      <HomeHeader/>
      <Wallet/>
      <ExchangeMarket/>
      <Rating activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default Home