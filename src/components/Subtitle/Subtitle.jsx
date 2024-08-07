import React from 'react';
import { SubtitleStyle } from './Subtitle.styled';

export const Subtitle = ({ children, ...props }) => {
  return <SubtitleStyle {...props}>{children}</SubtitleStyle>;
};
