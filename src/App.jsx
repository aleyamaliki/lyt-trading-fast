import React, { useState, useEffect } from "react";
import BottomNavigation from "./components/BottomNavigation.jsx";
import CreateandSellWallet from "./components/CreateandSellWallet.jsx";
import SearchBar from "../src/components/SearchBar.jsx"
import EarnCryptoList from "./EarnCrypto.jsx";

const App = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [activeNavTab, setActiveNavTab] = useState("Home");

  return (
    <div className="bg-backdrop min-h-screen text-white">
      <SearchBar />
      <CreateandSellWallet/>
      <EarnCryptoList activeTab={activeTab} onTabChange={setActiveTab}/>
      <BottomNavigation
        activeTab={activeNavTab}
        onTabChange={setActiveNavTab}
      />
    </div>
  );
};

export default App;
