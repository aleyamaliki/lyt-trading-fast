import React, { useState } from "react";
import TextH2 from "../components/Typography/H2";
import DynamicInput from "../components/DynamicInput";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import TextH1 from "../components/Typography/h1";
import TextH4 from "../components/Typography/H4";
import TextH3 from "../components/Typography/H3";

const Referral = () => {
  const [referralCode, setReferralCode] = useState("");

  const handleNext = () => {
    console.log(referralCode);
  };

  return (
    <div className="bg-backdrop min-h-full flex flex-col items-center justify-around p-4">
      <div>
        <TextH3 className="text-white">What’s your referral code?</TextH3>
        <TextH4 className="text-secondary text-center mt-2">
          You need referral code to access LYT
        </TextH4>
      </div>
      <div className="w-full border-2 border-white rounded-lg">
        <DynamicInput
          value={referralCode}
          onChange={(e) => setReferralCode(e.target.value)}
          onBlur={() => {}}
          className="w-full bg-transparent text-white"
          maxFontSize={30}
          minFontSize={30}
        />
      </div>
      <div className="flex items-center flex-col">
        <p className="text-secondary text-center mt-2">
          LYT is still cooking in beta! You’ll need a referral code to get
          access. No code, no vibes.
        </p>
        <ButtonPrimary text="NEXT" onClick={handleNext} className="mt-4" />
      </div>
    </div>
  );
};

export default Referral;
