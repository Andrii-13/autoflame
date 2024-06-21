import React from 'react';
import { TitleStyle } from './Title.styled';

export const Title = ({ children, ...props }) => {
  return <TitleStyle {...props}>{children}</TitleStyle>;
};
