import React from 'react';
import { HomeWrap, Paragraph, ParagraphsWrap } from './Home.styled';
import { Title } from 'components/Title/Title';
import { MySlider } from 'components/Slider/Slider';

const Home = () => {
  return (
    <HomeWrap>
      <MySlider />
      <Title $color="#3c3f44" $fontsize="32px">
        Автохімія, автокосметика, клея та герметики
      </Title>
      <ParagraphsWrap>
        <Paragraph>
          Компанія «Autoflame» є майданчиком продажу оригінальної продукції торгових марок "Hi-Gear". "Doctor Wax",
          "Done Deale", "StepUp", "Zipower". Ми пррпонуємо якісну продукцію виробництва USA.
        </Paragraph>
        <Paragraph>Ми пропонуємо якісну продукцію виробництва USA.</Paragraph>
      </ParagraphsWrap>
    </HomeWrap>
  );
};

export default Home;
