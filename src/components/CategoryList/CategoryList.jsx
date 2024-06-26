import React from 'react';
import { CategoryListStyle } from './CategoryList.styled';

import autochemistryImage from '../../data/images/category/autochemistry.jpg';
import autocosmeticsImage from '../../data/images/category/carCosmetics.jpg';
import adhesivesSealantsImage from '../../data/images/category/adhesivesSealants.jpg';
import toolsImage from '../../data/images/category/tools.jpg';
import { Link } from 'react-router-dom';

export const CategoryList = () => {
  return (
    <CategoryListStyle>
      <li>
        <Link>
          <div>
            Автохімія
            <img src={autochemistryImage} alt="autochemistry" />
          </div>
        </Link>
      </li>
      <li>
        <Link>
          <div>
            Автокосметика
            <img src={autocosmeticsImage} alt="autocosmetics" />
          </div>
        </Link>
      </li>
      <li>
        <Link>
          <div>
            Клея та герметики
            <img src={adhesivesSealantsImage} alt="adhesives and sealants" />
          </div>
        </Link>
      </li>
      <li>
        <Link>
          <div>
            Інструмент
            <img src={toolsImage} alt="tools" />
          </div>
        </Link>
      </li>
    </CategoryListStyle>
  );
};
