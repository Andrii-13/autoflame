import styled from 'styled-components';

export const FooterWrap = styled.footer`
  background-color: ${p => p.theme.colors.gray};
  box-shadow: ${p => p.theme.boxShadow.main};
`;

export const FooterLocation = styled.div`
  display: flex;
  padding: 30px 0;
  gap: 10px;
  justify-content: space-between;
`;

export const MapLocationBtn = styled.button`
  display: flex;
  gap: 10px;
`;
