import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const AllRecipients = ({ recipients }) => {
  return (
    <div className="bg-menuDark p-4 h-full w-full">
      <div className="flex  items-center mb-4">
        <IoIosArrowBack className="text-white text-2xl mr-2 w-1/10" />
        <h2 className="text-white text-2xl font-bold text-center w-full">
          All recipients
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5">
        {recipients.map((recipient) => (
          <div key={recipient.id} className="flex flex-col items-center">
            <div
              className="w-14 h-14 rounded-full mb-2 overflow-hidden"
              style={{ backgroundColor: recipient.bgColor }}
            >
              <img
                src={recipient.icon}
                alt={recipient.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              {recipient.name.split(" ").map((namePart, index) => (
                <span key={index} className="text-white text-xs block">
                  {namePart}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipients;
