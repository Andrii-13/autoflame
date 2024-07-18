import styled from 'styled-components';

export const CategoryListStyle = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: center;

  img {
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ProductImgWrap = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
`;
