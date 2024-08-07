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
    height: 100px;

    object-fit: contain;

    @media screen and (min-width: ${p => p.theme.breakPoints.tabletBreakPoint}) {
      height: 200px;
    }

    @media screen and (min-width: ${p => p.theme.breakPoints.desktopBreakPoint}) {
      height: 300px;
    }
  }

  .swiper-pagination-bullet-active {
    width: 10px;
    height: 10px;
  }

  .swiper-pagination-bullet {
    background-color: ${p => p.theme.colors.black}; /* Колір для інших */
  }
  .swiper-pagination-bullet-active {
    background-color: ${p => p.theme.colors.black}; /* Колір для активного */
  }
  .swiper-pagination-bullet-neighbor {
    background-color: ${p => p.theme.colors.black}; /* Колір для сусідніх */
    width: 10px;
    height: 10px;
    opacity: 50%;
  }
`;
