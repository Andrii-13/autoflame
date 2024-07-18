import React, { useEffect, useState } from 'react';
import autochemistryData from '../../../data/productHG.json';
import { Title } from 'components/Title/Title';
import { Container } from 'components/App/App.styled';
import { ProductData } from 'components/ProductData/ProductData';
import { CategoryListStyle } from 'pages/Autochemistry/Autochemistry.styled';

export const FuelSystem = () => {
  const [productsData, setProductsData] = useState([]);

  const productsAutochemistry = productsData.filter(
    productAutochemistry => productAutochemistry.category === 'autochemistry'
  );

  useEffect(() => {
    setProductsData(autochemistryData);
  }, []);

  return (
    <Container>
      <Title>Препарати для паливної системи</Title>
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
