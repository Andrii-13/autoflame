import React, { useEffect, useState } from 'react';
import allProductData from '../../../data/productHG.json';
import { Title } from 'components/Title/Title';
import { Container } from 'components/App/App.styled';
import { ProductData } from 'components/ProductData/ProductData';
import { CategoryListStyle } from 'pages/Autochemistry/Autochemistry.styled';
import { EmptyRequestNotificationStyle } from 'EmptyRequestNotification/EmptyRequestNotification.styled';

export const SubMenu = ({
  title,
  categoryFirstIndex,
  categorySecondIndex,
  categoryThirdIndex,
  categoryFourthIndex,
}) => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setProductsData(allProductData);
    setIsLoading(false);
  }, []);

  const productsSubMenu = productsData.filter(productSubMenu => {
    return categoryFourthIndex !== undefined
      ? productSubMenu.category[0] === `${categoryFirstIndex}` &&
          productSubMenu.category[1] === `${categorySecondIndex}` &&
          productSubMenu.category[2] === `${categoryThirdIndex}` &&
          productSubMenu.category[3] === `${categoryFourthIndex}`
      : categoryThirdIndex !== undefined
      ? productSubMenu.category[0] === `${categoryFirstIndex}` &&
        productSubMenu.category[1] === `${categorySecondIndex}` &&
        productSubMenu.category[2] === `${categoryThirdIndex}`
      : productSubMenu.category[0] === `${categoryFirstIndex}` &&
        productSubMenu.category[1] === `${categorySecondIndex}`;
  });

  useEffect(() => {
    setProductsData(allProductData);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <Container>
      <Title>{title}</Title>
      <>
        {productsSubMenu.length === 0 ? (
          <EmptyRequestNotificationStyle>
            По вашому запиту нічого не знайдено
          </EmptyRequestNotificationStyle>
        ) : (
          <CategoryListStyle>
            {productsSubMenu.map((productData, index) => (
              <ProductData
                key={index}
                productData={productData}
                index={index}
              />
            ))}
          </CategoryListStyle>
        )}
      </>
    </Container>
  );
};
