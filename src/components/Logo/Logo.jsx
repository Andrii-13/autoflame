import React from 'react';
import logo from '../../data/images/logo.jpg';
import { LogoWrap } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoWrap>
      <img src={logo} width="80" alt="logo" />
    </LogoWrap>
  );
};
