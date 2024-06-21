import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { MainTheme } from 'globalStyles';
import 'data/fonts/index';
import { GlobalStyle } from 'globalStyles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/furniture_technologies">
      <ThemeProvider theme={MainTheme}>
        <App />
      </ThemeProvider>
      <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>
);
