import React from "react";
import { CiFilter } from "react-icons/ci";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-surface text-white">
      <h1 className="text-xl font-bold">Market Trade</h1>
      <button className="text-primary">
        <CiFilter />
      </button>
    </header>
  );
};

export default Header;
