import React from "react";
import recipientData from "@data/recipientData";
import LatestRecipient from "../components/Recepient/LatestRecipient";
import TabSelector from "../components/TabSelector";
import AllRecipients from "../components/Recepient/AllRecepient";
import WelcomeHeader from "../components/Header/WelcomeHeader";

function WalletProfile() {
  return (
    <>
      {/* <WelcomeHeader userName="Tony Nguyen" />
      <LatestRecipient recipients={recipientData} />
      <TabSelector /> */}
      <AllRecipients recipients={recipientData} />
    </>
  );
}

export default WalletProfile;
