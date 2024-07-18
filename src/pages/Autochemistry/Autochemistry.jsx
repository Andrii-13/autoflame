import React from 'react';

import { Title } from 'components/Title/Title';
import { Container } from 'components/App/App.styled';
import fuelSystemImage from '../../data/images/category/subcategories/fuel_system.jpg';
import lubricationSystemImage from '../../data/images/category/subcategories/lubrication_system.jpg';
import coolingSystemImage from '../../data/images/category/subcategories/cooling_system.webp';
import { Link } from 'react-router-dom';
import { CategoryListStyle } from 'components/CategoryList/CategoryList.styled';

export const Autochemistry = () => {
  return (
    <Container>
      <Title>Автохімія</Title>
      <CategoryListStyle>
        <li>
          <Link to="/autochemistry/fuel_system">
            <div>
              Препарати для паливної системи
              <img src={fuelSystemImage} alt="fuel system" />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/autochemistry/fuel_system">
            <div>
              Препарати для системи змащення
              <img src={lubricationSystemImage} alt="lubrication system" />
            </div>
          </Link>
        </li>
        <li>
          <Link to="/autochemistry/fuel_system">
            <div>
              Препарати для системи охолодження
              <img src={coolingSystemImage} alt="cooling system" />
            </div>
          </Link>
        </li>
      </CategoryListStyle>
    </Container>
  );
};
