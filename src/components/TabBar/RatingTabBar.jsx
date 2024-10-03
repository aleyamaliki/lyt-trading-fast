import React from "react";

const RatingTabBar = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-4 p-4 bg-menuDark text-secondary overflow-x-auto font-semibold">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`whitespace-nowrap ${
            activeTab === tab ? "text-primary" : "text-secondary"
          }`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default RatingTabBar;
