import styled from 'styled-components';

export const HomeWrap = styled.section`
  position: relative;

  h2 {
    color: ${p => p.theme.colors.grayColor};
    font-size: 32px;
  }
`;

export const VideoWrap = styled.div`
  margin: 0 auto;
`;

export const HomeContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0 20px 0;
`;
