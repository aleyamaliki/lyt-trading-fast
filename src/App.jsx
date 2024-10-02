import React, { useState, useEffect } from "react";
import CollapsibleHeader from "./components/CollapsibleHeader.jsx";
import CryptoList from "./components/CryptoList.jsx";
import BottomNavigation from "./components/BottomNavigation.jsx";
import { cryptoData } from "./dummyData/cryptoData.js";

const App = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [activeNavTab, setActiveNavTab] = useState("Home");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCryptoData, setFilteredCryptoData] = useState(cryptoData);

  const tabs = ["All", "⭐ Favorites", "Attractive", "Meme", "Staking"];

  useEffect(() => {
    const filtered = cryptoData.filter((crypto) =>
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCryptoData(filtered);
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="bg-backdrop min-h-screen text-white">
      <CollapsibleHeader
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onSearch={handleSearch}
      />
      <div className="relative">
        <CryptoList cryptoData={filteredCryptoData} />
      </div>
      <BottomNavigation
        activeTab={activeNavTab}
        onTabChange={setActiveNavTab}
      />
    </div>
  );
};

export default App;
