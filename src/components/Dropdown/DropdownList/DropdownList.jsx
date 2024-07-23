import React from 'react';
import { DropdownListStyle } from './DropdownList.styled';

export const DropdownList = ({ className, children }) => {
  return (
    <DropdownListStyle className={className}>{children}</DropdownListStyle>
  );
};
