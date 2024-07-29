import styled from 'styled-components';

export const ProductItemStyle = styled.li`
  border: 1px solid ${p => p.theme.colors.borderColor};
  background-color: ${p => p.theme.colors.white};
  width: 160px;
  padding: 6px;
  gap: 6px;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${p => p.theme.boxShadow.menu};
  }

  div {
    max-width: 100%;
  }
`;
