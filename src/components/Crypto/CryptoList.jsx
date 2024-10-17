import React from "react";
import CryptoItem from "./CryptoItem";

const CryptoList = ({ cryptoData }) => {
  return (
    <div className="bg-surface ">
      {cryptoData.map((crypto) => (
        <CryptoItem key={crypto.name} {...crypto} />
      ))}
    </div>
  );
};

export default CryptoList;
