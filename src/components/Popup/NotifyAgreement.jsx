import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotifyAgreement = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleAccept = () => {
    navigate('/');
  };

  return (
    <div className="w-80 max-w-md mx-auto mt-10 p-6 border border-menuDark rounded-lg bg-menuDark shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-2">Privacy</h2>
      <p className="mb-4 text-secondary2 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
      </p>
      <h2 className="text-xl font-semibold text-white mb-2">Authorized Users</h2>
      <p className="mb-4 text-secondary2 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. 
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
      </p>
      <div className="flex flex-col items-start space-y-4 pb-4">
        <label className="flex items-center text-sm text-secondary">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="mr-2 h-4 w-4 text-blue-600 border-secondary rounded focus:ring-blue-500"
          />
          I agree with the terms and conditions
        </label>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <button
          onClick={handleAccept}
          disabled={!isChecked}
          className={`items-center px-4 py-2 w-64 rounded-md font-semibold text-white ${isChecked ? 'bg-primary hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'}`}
        >
          I Accept
        </button>
      </div>
    </div>
  );
};

export default NotifyAgreement;
