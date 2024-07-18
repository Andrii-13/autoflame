import React, { useEffect, useState } from 'react';
import autochemistryData from '../../data/productHG.json';
import { Title } from 'components/Title/Title';
import { Container } from 'components/App/App.styled';
import { ProductData } from 'components/CategoryList/ProductData/ProductData';
import { CategoryListStyle } from 'pages/Autochemistry/Autochemistry.styled';

export const AdhesivesSealants = () => {
  const [productsData, setProductsData] = useState([]);

  const productsAutocosmetics = productsData.filter(
    productAutochemistry => productAutochemistry.category === 'glue_sealants'
  );

  useEffect(() => {
    setProductsData(autochemistryData);
  }, []);

  return (
    <Container>
      <Title>Клея та герметики</Title>
      <>
        {productsData.length > 0 && (
          <CategoryListStyle>
            {productsAutocosmetics.map((productData, index) => (
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
