import React from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

const WelcomeHeader = ({ userName }) => {
  return (
    <header className="bg-menuDark p-2 flex justify-between items-center">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
          <FaUserCircle className="text-white text-2xl" />
        </div>
        <div>
          <p className="text-secondary text-sm font-semibold">Welcome back!</p>
          <h1 className="text-white text-lg font-bold">{userName}</h1>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-white text-xl">
          <FaSearch />
        </button>
        <button className="text-white text-xl relative">
          <IoNotificationsOutline />
        </button>
      </div>
    </header>
  );
};

export default WelcomeHeader;
