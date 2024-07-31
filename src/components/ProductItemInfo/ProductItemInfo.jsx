import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/productHG.json';
import { getImgPructCard } from '../../helpers/getImgProductCard';
import { ProductImgWrap } from 'pages/Autochemistry/Autochemistry.styled';

export const ProductItemInfo = () => {
  const { article: id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productData = productsData.find(
      productData => productData.article === id
    );
    setProduct(productData);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const images = getImgPructCard();

  const imageSrc = images[id];

  const {
    article,
    name,
    brand,
    descriptionUa,
    category,
    producer,
    unit,
    application,
  } = product;

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <div>
        <img src={imageSrc} alt={`Product ${article}`} />
      </div>
      <div>
        <div>{article}</div>
        <div>{name}</div>
        <div>{brand}</div>
        <div>{category.join(', ')}</div>
        <div>{descriptionUa}</div>
        <div>{producer}</div>
        <div>{unit}</div>
        <div>{application}</div>
      </div>
    </div>
  );
};
