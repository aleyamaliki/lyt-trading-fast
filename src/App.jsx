import React, { useState, useEffect } from "react";
import BottomNavigation from "./components/BottomNavigation.jsx";
import HomeHeader from "./components/NavBar/HomeHeader.jsx";
import Wallet from "./components/Wallet.jsx";
import ExchangeMarket from "./components/ExchangeMarket.jsx";
import MarketGraph from "./components/MarketGraph.jsx";

const App = () => {
  const [activeNavTab, setActiveNavTab] = useState("Home");

  return (
    <div className="bg-backdrop min-h-screen text-white">
      <HomeHeader/>
      <Wallet/>
      <ExchangeMarket/>
      <BottomNavigation
        activeTab={activeNavTab}
        onTabChange={setActiveNavTab}
      />
    </div>
  );
};

export default App;
