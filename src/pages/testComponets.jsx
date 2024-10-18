import React from "react";
import recipientData from "@data/recipientData";
import LatestRecipient from "../components/LatestRecipient";
import TabSelector from "../components/TabSelector";
import AllRecipients from "../components/AllRecepient";
import WelcomeHeader from "../components/Header/WelcomeHeader";

function TestComponents() {
  return (
    <>
      {/* <WelcomeHeader userName="Tony Nguyen" />
      <LatestRecipient recipients={recipientData} />
      <TabSelector /> */}
      <AllRecipients recipients={recipientData} />
    </>
  );
}

export default TestComponents;
