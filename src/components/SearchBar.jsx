import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ onSearch, onFocus, onBlur, placeholder }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="p-2 bg-surface">
      <div className="flex items-center bg-menuDark rounded-md p-3">
        <CiSearch className="text-white mr-3 text-xl" />
        <input
          type="text"
          placeholder={placeholder}
          className="bg-transparent text-white w-full focus:outline-none text-xs"
          onChange={handleInputChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};

export default SearchBar;
