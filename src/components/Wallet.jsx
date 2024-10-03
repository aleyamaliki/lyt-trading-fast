import { FaPaperPlane, FaDownload, FaShoppingCart, FaCoins } from 'react-icons/fa';
import { useState } from 'react';
import { PiCoins, PiPaperPlane, PiWallet } from 'react-icons/pi';
import { MdArrowDropDown } from 'react-icons/md';

const Wallet = () => {
    return (
        <div className="pb-2">
        <div className="p-6 bg-menuDark">
            {/* Header Section */}
            <div className="flex items-center mb-6">
                <h1 className="text-2xl font-bold text-primary">My Wallet</h1>
                <h1 className="text-3xl font-bold text-white px-2"> - </h1>
                <h1 className="text-2xl font-bold text-white flex items-center">Account 1 <MdArrowDropDown className="text-3xl" /></h1>
            </div>

            {/* Balance Section */}
            <div className="mb-6">
                <p className="text-3xl font-bold">$5,240.00</p>
            </div>

            {/* Buttons Section */}
            <div className="grid grid-cols-4 gap-4">
                {/* Send */}
                <div className="flex flex-col items-center">
                    <div className="bg-backdrop text-white p-4 rounded-full mb-2">
                        <PiPaperPlane className="text-4xl" />
                    </div>
                    <p className="text-white">Send</p>
                </div>

                {/* Receive */}
                <div className="flex flex-col items-center">
                    <div className="bg-backdrop text-white p-4 rounded-full mb-2">
                        <PiPaperPlane className="text-4xl transform rotate-180" />
                    </div>
                    <p className="text-white">Receive</p>
                </div>

                {/* Buy */}
                <div className="flex flex-col items-center">
                    <div className="bg-backdrop text-white p-4 rounded-full mb-2">
                        <PiWallet className="text-4xl" />
                    </div>
                    <p className="text-white">Buy</p>
                </div>

                {/* Earn */}
                <div className="flex flex-col items-center">
                    <div className="bg-backdrop text-white p-4 rounded-full mb-2">
                        <PiCoins className="text-4xl" />
                    </div>
                    <p className="text-white">Earn</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Wallet;
