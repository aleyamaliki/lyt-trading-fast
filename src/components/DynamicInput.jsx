import React, { useState } from 'react';

const DynamicInput = ({ value, onChange, onBlur, className, maxFontSize = 120, minFontSize = 40 }) => {
  const getFontSize = () => {
    const length = value.toString().length;
    return Math.max(maxFontSize - length * 10, minFontSize);
  };
  
  return (
    <div className="text-center">
      <input
        type="text"
        className={`text-gray-200 text-center w-full bg-transparent border-none focus:outline-none p-0 m-0 ${className}`}
        style={{ fontSize: `${getFontSize()}px`, lineHeight: '0', height: '120px' }}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default DynamicInput;