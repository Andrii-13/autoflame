import styled from 'styled-components';

export const ManagerItemStyle = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 10px;
  border: 1px solid green;
  width: fit-content;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const ManagerItemName = styled.p`
  display: flex;
  gap: 10px;
`;
