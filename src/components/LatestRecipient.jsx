import React from "react";

const LatestRecipient = ({ recipients }) => {
  // filter so that only the latest 5 recipients are shown
  const latestRecipients = recipients.sort((a, b) => b.id - a.id).slice(0, 5);

  return (
    <div className="bg-menuDark p-4 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">Latest recipient</h2>
        <a href="#" className="text-secondary text-sm">
          View All
        </a>
      </div>
      <div className="flex justify-evenly space-x-4 overflow-x-auto">
        {latestRecipients.map((recipient) => (
          <div key={recipient.id} className="flex flex-col items-center">
            <div
              className="w-12 h-12 rounded-full mb-2 overflow-hidden"
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

export default LatestRecipient;
