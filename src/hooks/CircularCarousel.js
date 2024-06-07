import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "./CircularCarousel.css";

const CircularCarousel = ({ items }) =>
{
  return (
    <Swiper
      direction="vertical"
      slidesPerView={3}
      centeredSlides={true}
      loop={true}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          {item}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CircularCarousel;
