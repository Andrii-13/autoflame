import styled from 'styled-components';

export const MainMenuTileStyle = styled.span`
  position: absolute;
  bottom: 50%;
  left: 50%;

  font-weight: 900;
  font-size: 36px;
  color: ${p => p.theme.colors.grayColor};
  transform: translate(-50%, 50%);

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  /* Білий ободок */
  text-shadow: 2px 2px 0 white,
    /* Зміщення по горизонталі і вертикалі */ -2px -2px 0 white,
    /* Негативне зміщення по горизонталі і вертикалі */ 2px -2px 0 white,
    /* Зміщення по горизонталі і протилежне вертикаллю */ -2px 2px 0 white; /* Негативне зміщення по горизонталі і вертикально */
`;
