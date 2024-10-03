import React, { useState, useEffect } from "react";
import BottomNavigation from "./components/BottomNavigation.jsx";
import HomeHeader from "./components/Header/HomeHeader.jsx";
import Wallet from "./components/Wallet.jsx";
import ExchangeMarket from "./components/Market/ExchangeMarket.jsx";
import Rating from "./components/Rating.jsx";
import NotificationPopup from "./components/Popup/NotificationPopup.jsx";

const App = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [activeNavTab, setActiveNavTab] = useState("Home");

  return (
    <div className="bg-backdrop min-h-screen text-white">
      <NotificationPopup/>
      <HomeHeader/>
      <Wallet/>
      <ExchangeMarket/>
      <Rating activeTab={activeTab} onTabChange={setActiveTab} />
      <BottomNavigation
        activeTab={activeNavTab}
        onTabChange={setActiveNavTab}
      />
    </div>
  );
};

export default App;
