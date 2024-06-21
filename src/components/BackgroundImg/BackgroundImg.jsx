import React from 'react';
import { BackgroundImgStyle } from './BackgroundImg.styled';

export const BackgroundImg = ({ children, ...props }) => {
  return <BackgroundImgStyle {...props}>{children}</BackgroundImgStyle>;
};
