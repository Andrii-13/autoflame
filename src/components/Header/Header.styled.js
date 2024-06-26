import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrap = styled.header`
  background-color: ${p => p.theme.colors.black};
  box-shadow: ${p => p.theme.boxShadow.main};
`;

export const HeaderNav = styled.nav`
  font-weight: 900;
  font-size: 16px;
  display: flex;
  gap: 20px;
  padding: 2px 0;
  align-items: center;

  a {
    color: ${p => p.theme.colors.white};
    &:hover {
      color: ${p => p.theme.colors.hoverColor};
    }
  }
  .active {
    color: ${p => p.theme.colors.activColor};
  }
`;

export const Link = styled(NavLink)``;
