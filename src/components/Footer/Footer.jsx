import { Container } from 'components/App/App.styled';
import React, { useState } from 'react';
import { FooterLocation, FooterWrap, MapLocationBtn } from './Footer.styled';
import mapIcon from '../../data/images/Map.png';
import UniversalModal from 'components/Modal/Modal';

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = e => {
    setIsOpen(true);
    //setIdCar(e.target.id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const screenWidth = window.innerWidth;

  const screenVisible = false ? screenWidth < 768 : screenWidth > 768;

  return (
    <FooterWrap>
      <Container>
        <FooterLocation>
          <div>
            <p>E-mail: autoflame@gmail.com</p>
          </div>
          <MapLocationBtn onClick={openModal}>
            <p>Подивитись на мапі</p>
            <img src={mapIcon} alt="map" width={20} height={20} />
          </MapLocationBtn>
          {isOpen && (
            <UniversalModal isOpen={isOpen} onClose={closeModal}>
              <div>
                {screenVisible && (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.584174639484!2d30.661869871679166!3d50.43021866304309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5213495e2fd%3A0x38eb621a82251730!2z0LLRg9C70LjRhtGPINCR0L7RgNC40YHQv9GW0LvRjNGB0YzQutCwLCA5LCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1714506457318!5m2!1suk!2sua"
                    title="office"
                    width="750"
                    height="600"
                    allowFullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                )}
                {!screenVisible && (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.584174639484!2d30.661869871679166!3d50.43021866304309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5213495e2fd%3A0x38eb621a82251730!2z0LLRg9C70LjRhtGPINCR0L7RgNC40YHQv9GW0LvRjNGB0YzQutCwLCA5LCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1714506457318!5m2!1suk!2sua"
                    title="office"
                    width="315"
                    height="500"
                    allowFullscreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                )}
              </div>
            </UniversalModal>
          )}
        </FooterLocation>
      </Container>
    </FooterWrap>
  );
};
