import React from 'react';
import { ManagerItemName, ManagerItemStyle } from './ManagerItem.styled';

export const ManagerItem = ({ contact, index }) => {
  const { firstName, lastName, surname, position, phone, region } = contact;

  return (
    <ManagerItemStyle className={`card card-${index}`}>
      <div>
        <ManagerItemName>
          <span>{firstName}</span>
          <span>{surname}</span>
          <span>{lastName}</span>
        </ManagerItemName>
        <p>{position}</p>
        <p>{phone}</p>
        <p>{region}</p>
      </div>
    </ManagerItemStyle>
  );
};
