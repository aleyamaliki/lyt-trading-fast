import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import SetupWallet from './SetupWallet';
import CreateCollection from '../CreateCollection';

const CreateandSellWallet = () => {
  const [activeComponent, setActiveComponent] = useState('wallet');

  return (
    <div className="p-4 bg-surface">
      <div>
        <h1 className="text-white text-xl font-semibold p-2">Create & Sell your Wallet</h1>
      </div>
      {/* Swiper for swipeable components */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => {
          if (swiper.activeIndex === 0) {
            setActiveComponent('wallet');
          } else if (swiper.activeIndex === 1) {
            setActiveComponent('collection');
          }
        }}
        initialSlide={activeComponent === 'wallet' ? 0 : 1}
      >
        <SwiperSlide>
          <div
            className={`rounded-3xl w-fit ${activeComponent === 'wallet' ? 'border-2 border-green-500' : ''}`}
            onClick={() => setActiveComponent('wallet')}
          >
            <SetupWallet />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`rounded-3xl w-fit ${activeComponent === 'collection' ? 'border-2 border-green-500' : ''}`}
            onClick={() => setActiveComponent('collection')}
          >
            <CreateCollection />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CreateandSellWallet;
