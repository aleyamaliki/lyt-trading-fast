import React from "react";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import ButtonPrimary from "../components/Button/ButtonPrimary";
import TextH2 from "../components/Typography/H2";

const LoginPage = () => {
  const handleConnect = () => {};

  return (
    <div className=" h-full w-screen bg-backdrop flex flex-col items-center justify-around">
      <TextH2 className="mt-10 text-center text-white">
        Your investment journey awaits!
      </TextH2>
      <ButtonPrimary
        text="Connect"
        onClick={handleConnect}
        className="w-full"
      />
    </div>
  );
};

export default LoginPage;
