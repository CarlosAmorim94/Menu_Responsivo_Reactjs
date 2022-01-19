import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './styles/global-style'
import { ThemeProvider } from 'styled-components'

const theme = {
  primary: '#202020',
  secondary: '#393939'
}

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>

      <App />

    </ThemeProvider>
  </>,
  document.getElementById('root')
);
