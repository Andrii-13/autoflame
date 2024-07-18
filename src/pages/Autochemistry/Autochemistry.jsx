import React, { useEffect, useState } from 'react';
import autochemistryData from '../../data/productHG.json';
import { Title } from 'components/Title/Title';
import { Container } from 'components/App/App.styled';
import { ProductData } from 'components/CategoryList/ProductData/ProductData';
import { CategoryListStyle } from './Autochemistry.styled';

export const Autochemistry = () => {
  const [productsData, setProductsData] = useState([]);

  const productsAutochemistry = productsData.filter(
    productAutochemistry => productAutochemistry.category === 'autochemistry'
  );

  useEffect(() => {
    setProductsData(autochemistryData);
  }, []);

  return (
    <Container>
      <Title>Автохімія</Title>
      <>
        {productsData.length > 0 && (
          <CategoryListStyle>
            {productsAutochemistry.map((productData, index) => (
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
