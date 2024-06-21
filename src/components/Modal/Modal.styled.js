import styled from 'styled-components';

export const ModalCloseButton = styled.button`
  position: absolute;
  display: flex;
  top: 16px;
  right: 16px;
  padding: 0;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background: none;
  border-radius: 50%;
  border: none;
  color: #666;
  font-size: 16px;
  cursor: pointer;
  z-index: 1001;

  &:hover {
    background-color: rgba(18, 20, 23, 0.1);
  }
`;

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(18, 20, 23, 0.5)',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    width: 'fit-content',
    height: 'fit-content',
    padding: '50px 10px 10px 10px',
    transition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export default modalStyles;
