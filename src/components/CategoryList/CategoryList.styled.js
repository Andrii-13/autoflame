import styled from 'styled-components';

export const CategoryListStyle = styled.ul`
  margin: 0 auto 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;

  li {
    position: relative;
  }

  .sub-menu-link {
    &:hover,
    &:focus {
      transform: scale(1.05);
      box-shadow: ${p => p.theme.boxShadow.menu};
    }
  }

  .main-menu-item {
    position: relative;
  }

  div {
    width: 300px;
    height: 300px;
    overflow: hidden;
    border: 1px solid #e8ecec;
  }

  img {
    margin: 0 auto;
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  .main-menu-item:hover,
  .main-menu-item:focus {
    box-shadow: ${p => p.theme.boxShadow.menu};
  }
  .main-menu-item:hover .sub-menu,
  .main-menu-item:focus .sub-menu {
    opacity: 1;
    visibility: visible;
    box-shadow: ${p => p.theme.boxShadow.menu};
  }

  .sub-menu {
    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }

  .sub-sub-menu,
  .sub-sub-sub-menu {
    z-index: 100;
    top: 0;
    left: 100%;
    border-radius: 10px;

    opacity: 0;
    visibility: hidden;
    background-color: red;
    box-shadow: ${p => p.theme.boxShadow.menu};
  }
`;
