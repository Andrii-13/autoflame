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
        /*  autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} */
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://kartinki.pics/uploads/posts/2021-07/1625170754_1-kartinkin-com-p-fon-dlya-tvicha-krasivie-foni-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kartinki.pics/uploads/posts/2021-07/1625170782_37-kartinkin-com-p-fon-dlya-tvicha-krasivie-foni-38.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kartinki.pics/uploads/posts/2021-07/1625170834_22-kartinkin-com-p-fon-dlya-tvicha-krasivie-foni-23.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kartinki.pics/uploads/posts/2021-07/thumbs/1625170900_51-kartinkin-com-p-fon-dlya-tvicha-krasivie-foni-52.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kartinki.pics/uploads/posts/2021-07/1625170898_59-kartinkin-com-p-fon-dlya-tvicha-krasivie-foni-61.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kartinki.pics/uploads/posts/2021-07/1625170756_14-kartinkin-com-p-fon-dlya-tvicha-krasivie-foni-15.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kartinki.pics/uploads/posts/2021-07/1625170818_20-kartinkin-com-p-fon-dlya-tvicha-krasivie-foni-21.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kartinki.pics/uploads/posts/2021-07/1625170790_39-kartinkin-com-p-fon-dlya-tvicha-krasivie-foni-40.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://kartinki.pics/uploads/posts/2021-07/1625170838_54-kartinkin-com-p-fon-dlya-tvicha-krasivie-foni-55.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </SwiperStyles>
  );
};
