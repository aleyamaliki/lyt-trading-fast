import React from "react";

const CryptoItem = ({ name, icon, revenue, lastPrice, change24h }) => {
  const isPositive = change24h >= 0;
  const changeColor = isPositive ? "text-primary" : "text-critical";

  return (
    <div className="flex justify-between items-center p-4 border-b border-line">
      <div className="flex items-center">
        <img src={icon} alt={name} className="w-8 h-8 mr-3" />
        <div>
          <h3 className="text-white font-semibold">{name}</h3>
          <p className="text-secondary text-sm">{revenue}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-white">${lastPrice}</p>
        <p className={`${changeColor} text-sm`}>{change24h}%</p>
      </div>
    </div>
  );
};

export default CryptoItem;
