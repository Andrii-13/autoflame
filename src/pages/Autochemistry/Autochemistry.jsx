import React, { useEffect, useState } from 'react';
import { AutochemistryListStyle } from './Autochemistry.styled';
import autochemistryData from '../../data/productHG.json';
import { Title } from 'components/Title/Title';
import { Container } from 'components/App/App.styled';
import { ProductData } from 'components/CategoryList/ProductData/ProductData';

export const Autochemistry = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    setProductsData(autochemistryData);
  }, []);

  return (
    <Container>
      <Title>Автохімія</Title>
      <>
        {productsData.length > 0 && (
          <AutochemistryListStyle>
            {productsData.map(productData => (
              <ProductData />
            ))}
          </AutochemistryListStyle>
        )}
      </>
    </Container>
  );
};
