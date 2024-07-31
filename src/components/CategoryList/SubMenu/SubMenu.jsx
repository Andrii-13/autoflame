import React, { useEffect, useState } from 'react';
import allProductData from '../../../data/productHG.json';
import { Title } from 'components/Title/Title';
import { Container } from 'components/App/App.styled';
import { ProductData } from 'components/ProductData/ProductData';
import { CategoryListStyle } from 'pages/Autochemistry/Autochemistry.styled';
import { EmptyRequestNotificationStyle } from 'EmptyRequestNotification/EmptyRequestNotification.styled';

export const SubMenu = ({ title, ...props }) => {
  const [productsData, setProductsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setProductsData(allProductData);
    setIsLoading(false);
  }, []);

  const categories = Object.values(props);

  const productsSubMenu = productsData.filter(productData => {
    for (let i = 0; i < categories.length; i += 1) {
      if (productData.category[i] !== categories[i]) {
        return false;
      }
      console.log(productData);
    }
    return true;
  });

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
