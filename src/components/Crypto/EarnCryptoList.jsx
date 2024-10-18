import React from "react";
import CryptoItem from "./CryptoItem";

const RatingCryptoList = ({ cryptoData }) => {
  return (
    <div className="bg-surface">
      {/* Crypto items */}
      {cryptoData.map((crypto) => (
        <CryptoItem key={crypto.name} {...crypto} />
      ))}
    </div>
  );
};

export default RatingCryptoList;
