import React from "react";
import TextH1 from "../components/Typography/h1";
import TextH2 from "../components/Typography/H2";
import TextH3 from "../components/Typography/H3";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import buyLYTMeme from "../assets/buyLYTmeme.jpg";

function NeedLyt() {
  const handleBuy = () => {};
  return (
    <div className=" flex flex-col items-center justify-around h-full">
      <div className=" flex flex-col items-center gap-4">
        <TextH2>Only $LYT holder</TextH2>
        <TextH3>You need 30,000 $LYT to access</TextH3>
      </div>
      <img
        src={buyLYTMeme}
        alt="Shut up and take my money meme"
        className="w-full h-auto"
      />
      <div>
        <ButtonPrimary text="BUY" onClick={handleBuy} />
      </div>
    </div>
  );
}

export default NeedLyt;
