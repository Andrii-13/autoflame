import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/productHG.json';
import { getImgPructCard } from '../../helpers/getImgProductCard';
import {
  ProductItemImgStyle,
  ProductItemInfoStyle,
  InfoContainer,
  InfoRow,
  InfoLabel,
  InfoValue,
} from './ProductItemInfo.styled';
import { Title } from 'components/Title/Title';

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
    capacity,
    unit,
    application,
    compositionUa,
  } = product;

  return (
    <>
      <Title>{name}</Title>
      <ProductItemInfoStyle>
        <ProductItemImgStyle>
          <img src={imageSrc} alt={`Product ${article}`} />
        </ProductItemImgStyle>
        <InfoContainer>
          <InfoRow>
            <InfoLabel>Артикул:</InfoLabel>
            <InfoValue>{article}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Бренд:</InfoLabel>
            <InfoValue>{brand}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Категорія товару:</InfoLabel>
            <InfoValue>{category.join(', ')}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Опис:</InfoLabel>
            <InfoValue>{descriptionUa}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Виробник:</InfoLabel>
            <InfoValue>{producer}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Об'єм:</InfoLabel>
            <InfoValue>{capacity}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Одиниця виміру:</InfoLabel>
            <InfoValue>{unit}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Спосіб використання:</InfoLabel>
            <InfoValue>{application}</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>Склад:</InfoLabel>
            <InfoValue>{compositionUa}</InfoValue>
          </InfoRow>
        </InfoContainer>
      </ProductItemInfoStyle>
    </>
  );
};
