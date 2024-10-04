import React from "react";
import data from "@data/cryptoData";
import recipientData from "@data/recipientData";
import MarketOne from "@components/Market/MarketOne";
import LatestRecipient from "@components/LatestRecipient";

const MainPage = () => {
  return (
    <div className="bg-backdrop min-h-screen text-white">
      <LatestRecipient recipients={recipientData} />
      {data.map((crypto, index) => (
        <MarketOne key={index} crypto={crypto} />
      ))}
    </div>
  );
};

export default MainPage;
