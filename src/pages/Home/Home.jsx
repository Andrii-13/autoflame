import React from 'react';
import { HomeContentWrap, HomeWrap } from './Home.styled';
import { Title } from 'components/Title/Title';
import { BtnUpDown } from 'components/BtnUpDown/BtnUpDown';
import { MySlider } from 'components/Slider/Slider';
import { CategoryList } from 'components/CategoryList/CategoryList';

const Home = () => {
  return (
    <HomeWrap>
      <BtnUpDown />
      <MySlider />
      <Title color="#3c3f44" fontSize="40px">
        Автохімія, автокосметика, клея та герметики
      </Title>
      <h2>Категорія товарів</h2>
      <HomeContentWrap>
        <CategoryList />
      </HomeContentWrap>
    </HomeWrap>
  );
};

export default Home;
