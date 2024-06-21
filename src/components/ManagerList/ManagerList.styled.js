import styled from 'styled-components';

export const ManagersListStyle = styled.ul`
  position: relative;

  .card {
    position: absolute;
    width: 300px;
    padding: 20px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease;
  }

  .card-0 {
    top: 60px;
    left: 0%;
    //transform: translate(-50%, -50%);
    rotate: -20grad;
  }

  .card-1 {
    top: 220px;
    right: 0%;
    //transform: translate(-50%, -50%);
    rotate: 20grad;
  }

  .card-2 {
    top: 340px;
    left: 0%;
    //transform: translate(-50%, -50%);
    rotate: 30grad;
  }

  .card-3 {
    top: 440px;
    right: 0%;
    //transform: translate(-50%, -50%);
    rotate: -20grad;
  }
`;
