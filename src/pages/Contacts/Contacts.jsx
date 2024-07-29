import { Container } from 'components/App/App.styled';
import React from 'react';
import { ManagerList } from 'components/ManagerList/ManagerList';
import { Title } from 'components/Title/Title';
import { BackgroundImg } from 'components/BackgroundImg/BackgroundImg';
import ourCntacts from '../../data/images/our_contacts.jpg';

const Contacts = () => {
  return (
    <Container>
      <Title>Контакти</Title>
      <BackgroundImg opacity="90%">
        <img src={ourCntacts} alt="construction corner" />
      </BackgroundImg>
      <ManagerList />
    </Container>
  );
};

export default Contacts;
