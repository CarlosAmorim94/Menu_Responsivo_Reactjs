import { createGlobalStyle } from 'styled-components'
import MarvelBackground from '../img/marvel.jpg'

export const GlobalStyle = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
  }

  body {
    padding: 0;
    margin: 0;
    background: url(${MarvelBackground});
    width: 100%;
    height: 100%;
  }
`