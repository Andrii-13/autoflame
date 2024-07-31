import { Footer, Header } from 'components';
import { Container } from 'components/App/App.styled';
import { Content } from 'components/Content/Content';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Header />
      <Content>
        <Container>
          <Outlet />
        </Container>
      </Content>
      <Footer />
    </>
  );
};
