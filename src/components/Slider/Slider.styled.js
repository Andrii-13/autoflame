import styled from 'styled-components';

export const SwiperStyles = styled.div`
  margin-top: 2px;
  border-radius: 6px;
  overflow: hidden;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 400px;

    object-fit: cover;
  }

  /* .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
  } */

  .swiper-pagination-bullet {
    background-color: red;
  }
  /* .swiper-pagination-bullet-active {
    width: 12px;
    height: 12px;
  } */

  .swiper-pagination-bullet {
    background-color: white; /* Колір для інших */
  }
  .swiper-pagination-bullet-active {
    background-color: white; /* Колір для активного */
  }
  .swiper-pagination-bullet-neighbor {
    background-color: white; /* Колір для сусідніх */
    /*    width: 10px;
    height: 10px;
    opacity: 50%; */
  }
`;
