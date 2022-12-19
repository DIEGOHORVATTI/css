import { createGlobalStyle } from 'styled-components'
import { colors } from '@G.styles/default-styles'

export const GlobalStyle = createGlobalStyle`

  * {
    /* font-family: Arial; */
    font-family: 'Open Sans', Arial, sans-serif;
    font-weight: 800;
    font-style: normal;
  }

  html, body{
    color: ${colors.white};
    background: ${colors.dark};
    height: 100vh;
    width: 100vw;
    margin: 1px;
    padding: 1px;
    -webkit-box-shadow: inset 0 0 100vw rgba(0, 0, 0, 0.8);
    box-shadow: inset 0 0 100vw rgba(0, 0, 0, 0.8);
    overflow-x: hidden;
  }

  a {
    color: ${colors.white};
    :focus, :active{
      color: ${colors.white};
    }
  }

  ul li {
    font-size: 20pt;
  }
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    margin: 1px 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: transparent;
    border-radius: 15px;
    margin: 1px 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #808080;
    border-radius: 15px;
    margin: 1px 5px;
  }

`
