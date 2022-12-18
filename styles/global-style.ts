import { createGlobalStyle } from 'styled-components'
import { colors, sizes } from './default-styles'

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: OpenSans, sans-serif;
    scroll-behavior: smooth;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-size: ${sizes.fontSize};
    background-color: ${colors.body};
    color: ${colors.white};
    background-color: ${colors.gray};
  }

  .crisp-client {
    display: none;
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