import React, { useEffect, useState } from 'react';
import autochemistryData from '../../data/productHG.json';
import { Title } from 'components/Title/Title';
import { CategoryListStyle } from 'pages/Autochemistry/Autochemistry.styled';
import { ProductData } from 'components/ProductData/ProductData';

export const Autocosmetics = () => {
  const [productsData, setProductsData] = useState([]);

  const productsAutocosmetics = productsData.filter(
    productAutochemistry => productAutochemistry.category === 'autocosmetics'
  );

  useEffect(() => {
    setProductsData(autochemistryData);
  }, []);

  return (
    <>
      <Title>Автокосметика</Title>
      {productsData.length > 0 && (
        <CategoryListStyle>
          {productsAutocosmetics.map((productData, index) => (
            <ProductData key={index} productData={productData} index={index} />
          ))}
        </CategoryListStyle>
      )}
    </>
  );
};
