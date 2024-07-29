import styled from 'styled-components';

export const DropdownItemStyle = styled.li`
  position: relative;
  top: 0;
  left: 0px;
  padding: 10px 20px;
  background-color: ${p => p.theme.colors.white};
  cursor: pointer;
  border-right: 1px solid ${p => p.theme.colors.borderColor};
  border-left: 1px solid ${p => p.theme.colors.borderColor};
  border-bottom: 1px solid ${p => p.theme.colors.borderColor};

  &:hover {
    background-color: ${p => p.theme.colors.borderColor};
    font-weight: 600;

    .sub-sub-menu {
      width: 160px;
      color: ${p => p.theme.colors.grayColor};
      opacity: 1;
      visibility: visible;
      transition: ${p => p.theme.cubicTransition};
      font-weight: 400;
    }
  }

  li:hover > .sub-sub-sub-menu {
    width: fit-content;
    color: ${p => p.theme.colors.grayColor};
    opacity: 1;
    visibility: visible;
    transition: ${p => p.theme.cubicTransition};
    font-weight: 400;
    background-color: red;
  }
`;
