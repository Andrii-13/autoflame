import React from 'react';
import logo from '../../data/images/logo.webp';
import { LogoWrap } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoWrap>
      <img src={logo} width="120" alt="logo" />
    </LogoWrap>
  );
};
