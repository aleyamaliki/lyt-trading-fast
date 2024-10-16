import React from "react";
import { GoHomeFill } from "react-icons/go";
import { BsCurrencyExchange } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaWallet } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BottomNavigation = ({ activeTab, onTabChange }) => {
  const tabs = [
    { name: "Home", icon: <GoHomeFill />, to: 
      '/home'
    },
    { name: "Tokens", icon: <BsCurrencyExchange/>, to: '/tokens'},
    { name: "Earn", icon: <BsGraphUpArrow />, to: '/earn' },
    { name: "Wallet", icon: <FaWallet />, to: '/walletprofile' },
  ];

  return (
    <nav className="w-full bg-menuDark flex justify-around items-center p-4">
      {tabs.map((tab) => (
        <Link
          key={tab.name}
          to={tab.to}
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
        </Link>
      ))}
    </nav>
  );
};

export default BottomNavigation;
