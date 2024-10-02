import React from "react";
import { GoHomeFill } from "react-icons/go";
import { BsCurrencyExchange } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaWallet } from "react-icons/fa6";

const BottomNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { name: "Home", icon: <GoHomeFill /> },
    { name: "Exchange", icon: <BsCurrencyExchange /> },
    { name: "Earn", icon: <BsGraphUpArrow /> },
    { name: "Wallet", icon: <FaWallet /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-menuDark flex justify-around items-center p-4">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`flex flex-col items-center `}
          onClick={() => onTabChange(tab.name)}
        >
          <span className={`text-secondary mb-1 `}>
            {React.cloneElement(tab.icon, {
              className: `w-6 h-6 ${
                activeTab === tab.name ? "text-primary" : "text-secondary"
              }`,
            })}
          </span>
          <span className="text-xs">{tab.name}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNavigation;
