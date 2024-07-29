import React from 'react';
import { CategoryListStyle } from './CategoryList.styled';
import autochemistryImage from '../../data/images/category/autochemistry.jpg';
import autocosmeticsImage from '../../data/images/category/carCosmetics.jpg';
import adhesivesSealantsImage from '../../data/images/category/adhesivesSealants.jpg';
import accesoriesImage from '../../data/images/category/accesories.jpg';
import toolsImage from '../../data/images/category/tools.jpg';
import { Link } from 'react-router-dom';
import { MainMenuTile } from 'components/Dropdown/MainMenuTile/MainMenuTile';
import { AutochemistryList } from './AutochemistryList/AutochemistryList';
import { AutocosmeticsList } from './AutocosmeticsList/AutocosmeticsList';
import { AdhesivesList } from './AdhesivesList/AdhesivesList';
import { AccessoriesList } from './AccessoriesList/AccessoriesList';
import { ToolsList } from './ToolsList/ToolsList';

export const CategoryList = () => {
  return (
    <CategoryListStyle className="main-menu">
      <li className="main-menu-item">
        <Link to="/autochemistry">
          <div>
            <MainMenuTile>Автохімія</MainMenuTile>
            <img src={autochemistryImage} alt="autochemistry" />
          </div>
        </Link>
        <AutochemistryList />
      </li>
      <li className="main-menu-item">
        <Link to="/autocosmetics">
          <div>
            <MainMenuTile>Автокосметика</MainMenuTile>
            <img src={autocosmeticsImage} alt="autocosmetics" />
          </div>
        </Link>
        <AutocosmeticsList />
      </li>
      <li className="main-menu-item">
        <Link to="/adhesives_sealants">
          <div>
            <MainMenuTile>Клея та герметики</MainMenuTile>
            <img src={adhesivesSealantsImage} alt="adhesives and sealants" />
          </div>
        </Link>
        <AdhesivesList />
      </li>
      <li className="main-menu-item">
        <Link to="/accessories">
          <div>
            <MainMenuTile>Аксесуари</MainMenuTile>
            <img src={accesoriesImage} alt="accessories" />
          </div>
        </Link>
        <AccessoriesList />
      </li>
      <li className="main-menu-item">
        <Link to="/tools">
          <div>
            <MainMenuTile>Інструмент</MainMenuTile>
            <img src={toolsImage} alt="tools" />
          </div>
        </Link>
        <ToolsList />
      </li>
    </CategoryListStyle>
  );
};
