import styled from 'styled-components';

export const BackgroundImgStyle = styled.div`
  position: fixed;
  opacity: ${props => props.opacity || '30%'};
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (max-width: 767px) {
    img {
      width: 320px;
    }
  }
`;
