import React from 'react';
import { ProductItemStyle } from './ProductData.styled';
import { ProductImgWrap } from 'pages/Autochemistry/Autochemistry.styled';
import {
  ArticleStyle,
  NameStyle,
  ProductDescriptionStyle,
} from './ProductDescription/ProductDescriptionStyle.styled';
import { getImgPructCard } from '../../helpers/getImgProductCard';
import { Link } from 'react-router-dom';

const images = getImgPructCard();

export const ProductData = ({ productData }) => {
  const { article, name, category } = productData;

  const imageSrc = images[article];

  const quantitySubCategory = category.length;
  const productURL = `${category[0]}/${category[1]}/${category[2]}/${category[3]}/${category[4]}`;

  //console.log(quantitySubCategory);

  return (
    <>
      <ProductItemStyle>
        <Link to={`/${productURL}/${article}`}>
          <div>
            <ProductImgWrap>
              <img src={imageSrc} alt={`Product ${article}`} />
            </ProductImgWrap>
            <ProductDescriptionStyle>
              <ArticleStyle>{article}</ArticleStyle>
              <NameStyle>{name}</NameStyle>
            </ProductDescriptionStyle>
          </div>
        </Link>
      </ProductItemStyle>
    </>
  );
};
