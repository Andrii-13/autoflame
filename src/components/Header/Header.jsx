import { Container } from 'components/App/App.styled';
import { Logo } from 'components/Logo/Logo';
import React from 'react';
import { HeaderNav, HeaderWrap, Link } from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrap>
      <Container>
        <HeaderNav>
          <Link to="/">
            <Logo />
          </Link>
          <Link to="/catalog">Каталог</Link>
          <Link to="/contacts">Контакти</Link>
        </HeaderNav>
      </Container>
    </HeaderWrap>
  );
};
