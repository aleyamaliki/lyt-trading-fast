import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; 
import Step from './Step';

const Steps = ({ steps }) => {
  const [activeComponent, setActiveComponent] = useState(steps[0].id);

  return (
    <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={(swiper) => {
          setActiveComponent(steps[swiper.activeIndex].id);
        }}
        initialSlide={activeComponent === 'wallet' ? 0 : 1}
      >
        {steps.map((step, idx) => {
          return (
            <SwiperSlide>
              <div
                className={`rounded-3xl w-fit ${activeComponent === step.id ? 'border-2 border-green-500' : ''}`}
                onClick={() => setActiveComponent(step.id)}
              >
                <Step title={step.title} icon={step.icon} description={step.description} />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
  );
};

export default Steps;
