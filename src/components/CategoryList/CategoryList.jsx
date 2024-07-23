import React from 'react';
import { CategoryListStyle } from './CategoryList.styled';
import autochemistryImage from '../../data/images/category/autochemistry.jpg';
import autocosmeticsImage from '../../data/images/category/carCosmetics.jpg';
import adhesivesSealantsImage from '../../data/images/category/adhesivesSealants.jpg';
import accesoriesImage from '../../data/images/category/accesories.jpg';
import toolsImage from '../../data/images/category/tools.jpg';
import { Link } from 'react-router-dom';
import { DropdownList } from 'components/Dropdown/DropdownList/DropdownList';
import { DropdownItem } from 'components/Dropdown/DropdownItem/DropdownItem';

export const CategoryList = () => {
  return (
    <CategoryListStyle className="main-menu">
      <li className="main-menu-item">
        <Link to="/autochemistry">
          <div>
            Автохімія
            <img src={autochemistryImage} alt="autochemistry" />
          </div>
        </Link>
        <DropdownList className="autochemistry-list sub-menu">
          <DropdownItem>
            <span>Паливна система</span>
            <DropdownList className="sub-sub-menu">
              <DropdownItem>
                <span>Бензин</span>
                <DropdownList className="sub-sub-sub-menu">
                  <DropdownItem>Промивки</DropdownItem>
                  <DropdownItem>Присадки</DropdownItem>
                  <DropdownItem>Герметики</DropdownItem>
                </DropdownList>
              </DropdownItem>
              <DropdownItem>
                <span>Дизель</span>
                <DropdownList className="sub-sub-sub-menu">
                  <DropdownItem>Промивки</DropdownItem>
                  <DropdownItem>Присадки</DropdownItem>
                  <DropdownItem>Очисники</DropdownItem>
                  <DropdownItem>"Зима"</DropdownItem>
                </DropdownList>
              </DropdownItem>
            </DropdownList>
          </DropdownItem>
          <DropdownItem>
            <span>Система змащення</span>
            <DropdownList className="sub-sub-menu">
              <DropdownItem>Промивки</DropdownItem>
              <DropdownItem>Присадки</DropdownItem>
              <DropdownItem>Герметики</DropdownItem>
            </DropdownList>
          </DropdownItem>
          <DropdownItem>
            <span>Система охолодження</span>
            <DropdownList className="sub-sub-menu">
              <DropdownItem>Промивки</DropdownItem>
              <DropdownItem>Герметики</DropdownItem>
            </DropdownList>
          </DropdownItem>
          <DropdownItem>Змащувальні препарати</DropdownItem>
          <DropdownItem>Кондиціонер металу</DropdownItem>
          <DropdownItem>Колеса</DropdownItem>
          <DropdownItem>Технічні рідини</DropdownItem>
        </DropdownList>
      </li>
      <li className="main-menu-item">
        <Link to="/autocosmetics">
          <div>
            Автокосметика
            <img src={autocosmeticsImage} alt="autocosmetics" />
          </div>
        </Link>
      </li>
      <li className="main-menu-item">
        <Link to="/adhesives_sealants">
          <div>
            Клея та герметики
            <img src={adhesivesSealantsImage} alt="adhesives and sealants" />
          </div>
        </Link>
      </li>
      <li className="main-menu-item">
        <Link to="/accessories">
          <div>
            Аксесуари
            <img src={accesoriesImage} alt="accessories" />
          </div>
        </Link>
      </li>
      <li className="main-menu-item">
        <Link to="/tools">
          <div>
            Інструмент
            <img src={toolsImage} alt="tools" />
          </div>
        </Link>
      </li>
    </CategoryListStyle>
  );
};
