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
  const { article, name } = productData;

  const imageSrc = images[article];

  return (
    <>
      <ProductItemStyle>
        <Link to={`/product/${article}`}>
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
