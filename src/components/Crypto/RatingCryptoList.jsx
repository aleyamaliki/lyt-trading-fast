import React from "react";
import CryptoItem from "./CryptoItem";

const RatingCryptoList = ({ cryptoData }) => {
  return (
    <div className="bg-menuDark p-4">
      {/* Tab list header */}
      <div className=" grid-cols-3 text-gray-400 text-sm font-semibold border-b border-gray-600 px-6 mb-4 flex justify-between">
        <div className="text-left">
          <p>Name</p>
          <p>Revenue</p>
        </div>
        <div className="text-right">
          <p>Last Price</p>
          <p>Change</p>
        </div>
      </div>

      {/* Crypto items */}
      {cryptoData.map((crypto) => (
        <CryptoItem key={crypto.name} {...crypto} />
      ))}
    </div>
  );
};

export default RatingCryptoList;
