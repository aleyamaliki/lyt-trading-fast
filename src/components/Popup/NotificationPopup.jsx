import React, { useState, useEffect } from 'react';
import NotifyAgreement from './NotifyAgreement';

const NotificationPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showAgreement, setShowAgreement] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleAllow = () => {
    console.log("Notifications Allowed");
    setIsOpen(false);
    setShowAgreement(true);
  };

  const handleDeny = () => {
    console.log("Notifications Denied");
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-menuDark p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-semibold mb-4">Would you like to get Notifications?</h2>
            <p className="text-secondary mb-6">Notifications may include alerts, sounds, and icon badges. These can be configured in Settings.</p>
            <div className="flex justify-between">
              <button
                onClick={handleDeny}
                className="px-4 py-2 bg-menuDark text-white rounded hover:bg-line"
              >
                Don't Allow
              </button>
              <button
                onClick={handleAllow}
                className="px-4 py-2 bg-menuDark text-primary rounded hover:bg-line"
              >
                Allow
              </button>
            </div>
          </div>
        </div>
      )}
       {showAgreement && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <NotifyAgreement />
        </div>
      )}
    </>
  );
};

export default NotificationPopup;
