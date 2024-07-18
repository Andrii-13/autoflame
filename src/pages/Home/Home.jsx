import { Container } from 'components/App/App.styled';
import React from 'react';
import { HomeContentWrap, HomeWrap } from './Home.styled';
import { Title } from 'components/Title/Title';
import { BtnUpDown } from 'components/BtnUpDown/BtnUpDown';
import { MySlider } from 'components/Slider/Slider';
import { CategoryList } from 'components/CategoryList/CategoryList';

export const Home = () => {
  return (
    <HomeWrap>
      <Container>
        <BtnUpDown />
        <MySlider />
        <Title color={p => p.theme.colors.grayColor} fontsize="40px">
          Автохімія, автокосметика, клея та герметики
        </Title>
        <HomeContentWrap>
          <h2>Категорія товарів</h2>
          <CategoryList />
        </HomeContentWrap>
      </Container>
    </HomeWrap>
  );
};
