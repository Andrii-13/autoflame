import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-width: ${p => p.theme.breakPoints.mobileBreakPoint};
  max-width: 428px;
  padding: 0 16px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${p => p.theme.breakPoints.tabletBreakPoint}) {
    max-width: ${p => p.theme.breakPoints.tabletBreakPoint};
  }

  @media screen and (min-width: ${p => p.theme.breakPoints.desktopBreakPoint}) {
    max-width: ${p => p.theme.breakPoints.desktopBreakPoint};
  }
`;
