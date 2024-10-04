import React, { useState, useEffect } from 'react';

const NotificationPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      // Disable scrolling when the popup is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when the popup is closed
      document.body.style.overflow = 'auto';
    }

    // Cleanup: Re-enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

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
          <div className="bg-menuDark p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4">Enable Notifications</h2>
            <p className="text-secondary mb-6">Would you like to receive notifications?</p>
            <div className="flex justify-between">
              <button
                onClick={handleDeny}
                className="px-4 py-2 bg-menuDark text-white rounded hover:bg-line"
              >
                Don't Allow
              </button>
              <button
                onClick={handleAllow}
                className="px-4 py-2 bg-menuDark text-white rounded hover:bg-line"
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
