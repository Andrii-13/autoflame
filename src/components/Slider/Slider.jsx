import React, { useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { SwiperStyles } from './Slider.styled';

import HgImg from 'data/images/slider/hg.jpg';
import DwImg from 'data/images/slider/dw.jpg';
import DdImg from 'data/images/slider/dd.jpg';
import SmtImg from 'data/images/slider/smt.jpg';
import ErImg from 'data/images/slider/er.jpg';

export const MySlider = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      const updatePaginationColors = () => {
        const bullets = swiperInstance.pagination.bullets;
        const activeIndex = swiperInstance.activeIndex;

        bullets.forEach((bullet, index) => {
          bullet.classList.remove(
            'swiper-pagination-bullet-active',
            'swiper-pagination-bullet-neighbor'
          );
          if (index === activeIndex) {
            bullet.classList.add('swiper-pagination-bullet-active');
          } else if (index === activeIndex - 1 || index === activeIndex + 1) {
            bullet.classList.add('swiper-pagination-bullet-neighbor');
          }
        });
      };

      updatePaginationColors();
      swiperInstance.on('slideChange', updatePaginationColors);

      return () => {
        swiperInstance.off('slideChange', updatePaginationColors);
      };
    }
  }, []);

  return (
    <SwiperStyles>
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        //navigation={true}
        /*      pagination={{
          dynamicBullets: true,
        }} */
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={HgImg} alt="Hi-Gear emblem" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DwImg} alt="Doctor Wax emblem" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SmtImg} alt="SMT emblem" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={DdImg} alt="Done Deal emblem" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ErImg} alt="ER emblem" />
        </SwiperSlide>
      </Swiper>
    </SwiperStyles>
  );
};
