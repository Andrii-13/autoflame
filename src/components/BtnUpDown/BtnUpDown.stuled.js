import styled from 'styled-components';

export const BtnUpDownStyle = styled.button`
  position: fixed;
  bottom: 100px;
  right: 50px;

  height: 40px;
  width: 40px;
  border: none;
  background-color: cadetblue;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  transition: ${p => p.theme.cubicTransition};

  &:hover,
  &:focus {
    background-color: tomato;
  }

  &:hover .btnUpStyle,
  &:focus .btnUpStyle {
    fill: red;
  }

  .btnUpStyle {
    width: 20px;
    height: 20px;
    fill: blueviolet;
  }
`;
