import styled from 'styled-components';

export const SubtitleStyle = styled.h2`
  font-size: ${props => props.fontsize || '22px'};
  font-weight: 700;
  margin: 20px 0;
  color: ${props => props.color || 'black'};
  margin-top: ${props => props.margintop || '10px'};
`;
