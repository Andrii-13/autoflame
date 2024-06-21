const defaultTheme = {
  cubicTransition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
};

export const MainTheme = {
  ...defaultTheme,

  colors: {
    // =========  Backgrounds

    gray: '#c0c0c0',
    overlayColor: '#e7e7e7',

    // =========  Fonts
    mainFontColor: '#121417',
    secondFontColor: '#8A8A89',
    blueColor: '#3470FF',
  },

  breakPoints: {
    mobileBreakPoint: '320px',
    tabletBreakPoint: '768px',
    desktopBreakPoint: '1200px',
  },

  boxShadow: {
    main: '0px 2px 1px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08)',
  },
};
