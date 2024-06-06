import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import styles from "./CircularCarousel.module.css";
import "./CustomSwiper.css";

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
        <SwiperSlide key={index} className={styles.slide}>
          <div className={styles.bizCard}>
            <div className={styles.content}>
              <div>
                <p>{item.name}</p>
                <p>{item.org}</p>
              </div>
              <div>
                <p>T. {item.tel}</p>
                <p>E. {item.email}</p>
              </div>
              <img className={styles.bizCardLogo} src='svgs/bizCardLogo.svg' alt='bizCardLogo' />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CircularCarousel;
