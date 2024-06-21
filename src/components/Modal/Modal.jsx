import React from 'react';
import Modal from 'react-modal';
import modalStyles, { ModalCloseButton } from './Modal.styled';
import { MdClose } from 'react-icons/md';
import { ModalTitle } from 'components/ModalTitle/ModalTitle';
import { useTheme } from 'styled-components';

const UniversalModal = ({ isOpen, onClose, children, content }) => {
  const theme = useTheme();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        ...modalStyles,
        //transition: theme.cubicTransition,
        content: {
          ...modalStyles.content,
          backgroundColor: theme.colors.overlayColor,
        },
      }}
      ariaHideApp={false}
    >
      <ModalTitle>Адреса офісу</ModalTitle>
      <ModalCloseButton onClick={onClose}>
        <MdClose fill="black" />
      </ModalCloseButton>
      {children}
      {content}
    </Modal>
  );
};

export default UniversalModal;
