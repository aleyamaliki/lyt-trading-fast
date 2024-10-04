import React from "react";
import { CiFilter } from "react-icons/ci";

const EarnHeader = () => {
  return (
    <header className="border-b-[1px] border-gray-900">
      <div className="bg-menuDark p-4 flex justify-between items-center w-full">
        <h1 className="text-xl font-bold text-white">Earn</h1>
        <button className=" text-white text-2xl">
          <CiFilter />
      </button>         
      </div>
    </header>
  );
};

export default EarnHeader;
