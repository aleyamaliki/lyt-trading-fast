import React, { useState } from "react";

function TabSelector() {
  const [activeTab, setActiveTab] = useState("History");
  const tabs = ["History", "Market"];

  return (
    <div className="bg-backdrop flex flex-row rounded-lg m-1 p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`text-lg font-semibold p-1 w-1/2 text-center ${
            activeTab === tab
              ? "bg-menuDark text-white"
              : "bg-backdrop text-secondary"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default TabSelector;
