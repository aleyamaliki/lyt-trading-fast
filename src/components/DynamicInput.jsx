import React from "react";

const DynamicInput = ({
  value,
  onChange,
  onBlur,
  className,
  maxFontSize = 30,
  minFontSize = 14,
}) => {
  const getFontSize = () => {
    const length = value.toString().length;
    return Math.max(maxFontSize - length * 2, minFontSize);
  };

  return (
    <div className="text-center">
      <input
        type="text"
        className={`text-gray-200 text-center w-full bg-transparent border border-gray-600 focus:outline-none p-2 m-0 ${className}`}
        style={{
          fontSize: `${getFontSize()}px`,
          lineHeight: "1.5",
          height: "50px",
        }}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default DynamicInput;
