import React from "react";
import { CiFilter } from "react-icons/ci";

const EarnHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-surface text-white">
        <div className="flex justify-between items-center p-4 ">
      <h1 className="text-xl font-bold">Earn</h1>
      <button className="text-2xl">
        <CiFilter />
      </button>
        </div>
    </header>
  );
};

export default EarnHeader;
