import styled from 'styled-components';

/* export const ProductItemInfoStyle = styled.div`
  display: flex;
  margin: 20px 0;
  gap: 20px;

  p > p {
    margin-right: 10px;
  }

  .product-item-article {
    font-size: 16px;
    font-weight: 600;
    text-align: end;
  }
`; */

export const ProductItemImgStyle = styled.div`
  display: flex;

  img {
    height: 100%;
  }
`;

export const ProductItemInfoStyle = styled.div`
  display: flex;
  gap: 40px;
  margin: 20px 0;
`;

/* export const ProductItemImgStyle = styled.div`
  img {
    max-width: 300px;
    height: auto;
  }
`; */

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
