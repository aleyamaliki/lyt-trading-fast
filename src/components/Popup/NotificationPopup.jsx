import React, { useState } from 'react';

const NotificationPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleAllow = () => {
    // Handle the "Allow" action here
    console.log("Notifications Allowed");
    setIsOpen(false);
  };

  const handleDeny = () => {
    // Handle the "Don't Allow" action here
    console.log("Notifications Denied");
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4">Enable Notifications</h2>
            <p className="text-gray-700 mb-6">Would you like to receive notifications?</p>
            <div className="flex justify-between">
              <button
                onClick={handleDeny}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Don't Allow
              </button>
              <button
                onClick={handleAllow}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Allow
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NotificationPopup;
