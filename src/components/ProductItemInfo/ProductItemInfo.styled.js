import styled from 'styled-components';

export const ProductItemInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 20px 0;

  @media screen and (min-width: ${p => p.theme.breakPoints.tabletBreakPoint}) {
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin: 20px 0;
  }

  @media screen and (min-width: ${p => p.theme.breakPoints.desktopBreakPoint}) {
    display: flex;
    flex-direction: row;
    gap: 40px;
    margin: 20px 0;
  }
`;

export const ProductItemImgStyle = styled.div`
  display: flex;

  img {
    margin: 0 auto;
    width: 100px;

    @media screen and (min-width: ${p => p.theme.breakPoints.tabletBreakPoint}) {
      width: 160px;
      height: fit-content;
    }

    @media screen and (min-width: ${p => p.theme.breakPoints.desktopBreakPoint}) {
      width: fit-content;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InfoRow = styled.div`
  display: flex;
`;

export const InfoLabel = styled.div`
  font-weight: bold;
  flex: 1;
  padding: 5px;
  background-color: #f9f9f9;
`;

export const InfoValue = styled.div`
  flex: 2;
  padding: 5px;
  background-color: #f1f1f1;
`;
