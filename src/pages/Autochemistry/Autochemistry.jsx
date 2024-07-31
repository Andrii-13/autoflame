import React from 'react';
import { Title } from 'components/Title/Title';
import fuelSystemImage from '../../data/images/category/subcategories/fuel_system.webp';
import lubricationSystemImage from '../../data/images/category/subcategories/lubrication_system.webp';
import coolingSystemImage from '../../data/images/category/subcategories/cooling_system.webp';
import { Link } from 'react-router-dom';
import { CategoryListStyle } from 'components/CategoryList/CategoryList.styled';
import { MainMenuTile } from 'components/Dropdown/MainMenuTile/MainMenuTile';

export const Autochemistry = () => {
  return (
    <>
      <Title>Автохімія</Title>
      <CategoryListStyle>
        <li className="sub-menu-link">
          <Link to="/autochemistry/fuel_system">
            <div>
              <MainMenuTile>Препарати для паливної системи</MainMenuTile>
              <img src={fuelSystemImage} alt="fuel system" />
            </div>
          </Link>
        </li>
        <li className="sub-menu-link">
          <Link to="/autochemistry/fuel_system">
            <div>
              <MainMenuTile>Препарати для системи змащення</MainMenuTile>
              <img src={lubricationSystemImage} alt="lubrication system" />
            </div>
          </Link>
        </li>
        <li className="sub-menu-link">
          <Link to="/autochemistry/fuel_system">
            <div>
              <MainMenuTile>Препарати для системи охолодження</MainMenuTile>
              <img src={coolingSystemImage} alt="cooling system" />
            </div>
          </Link>
        </li>
      </CategoryListStyle>
    </>
  );
};
