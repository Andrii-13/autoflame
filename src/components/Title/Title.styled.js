import styled from 'styled-components';

export const TitleStyle = styled.h1`
  margin: 20px 0;
  text-align: center;
  color: ${props => props.color || 'black'};
  margin-top: ${props => props.$margintop || '50px'};
`;
