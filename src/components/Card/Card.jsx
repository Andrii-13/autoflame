import React from 'react';
import { CardStyle } from './Card.styled';

export const Card = ({ card }) => {
  const { name, img, id, material, thickness, length, width, works } = card;

  return (
    <CardStyle>
      <img src={img} alt={name} width="264" height="260" />
      <p>Артикул: {id}</p>
      <p>Назва: {name}</p>
      <p>Матеріал: {material}</p>
      <p>Товщина: {thickness}</p>
      <p>Довжина: {length}</p>
      <p>Ширина: {width}</p>
      <p>Види робіт: {works}</p>
    </CardStyle>
  );
};
