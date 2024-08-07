import React from 'react';
import { Title } from 'components/Title/Title';
import { CategoryList } from 'components/CategoryList/CategoryList';
import { HomeContentWrap, HomeWrap } from 'pages/Home/Home.styled';
import { Subtitle } from 'components/Subtitle/Subtitle';

const Catalog = () => {
  return (
    <HomeWrap>
      <Title $color="#3c3f44" $fontsize="32px" $margintop="20px">
        Автохімія, автокосметика, клея та герметики
      </Title>
      <Subtitle $color="#3c3f44" $fontsize="24px">
        Категорія товарів:
      </Subtitle>
      <HomeContentWrap>
        <CategoryList />
      </HomeContentWrap>
    </HomeWrap>
  );
};

export default Catalog;
