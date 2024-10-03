import React from 'react';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { IoNotificationsOutline, IoSearch  } from 'react-icons/io5';
import { LuGift  } from 'react-icons/lu';

const HomeHeader = () => {
    return (
        <header className="border-b-[1px] border-gray-900">
            <div className="bg-menuDark p-4 flex justify-between items-center w-full">
                {/* Profile Icon */}
                <div className="flex items-center">
                    <FaUserCircle className="text-gray-600 text-3xl" />
                </div>

                {/* Search Bar */}
                <div className="flex-grow mx-4">
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Looking for crypto"
                            className="w-full bg-line text-secondary rounded-lg pl-10 py-2 focus:outline-none"
                        />
                        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary text-2xl" />
                    </div>
                </div>

                {/* Icons Section */}
                <div className="flex items-center space-x-4">
                    {/* Gift Icon */}
                    <button className="text-white text-2xl">
                        <LuGift />
                    </button>

                    {/* Notification Icon */}
                    <button className="text-white text-2xl">
                        <IoNotificationsOutline />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default HomeHeader;
