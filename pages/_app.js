import App from 'next/app'
import Head  from 'next/head'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Bandeins Strange Variable';
    src: url('/static/fonts/BandeinsStrangeVariableGX.ttf');
  }
  @keyframes stretchyHeading {
    0% {
      font-variation-settings: 'wdth' 150, 'wght' 900;
      opacity: 1;
    }
    5% {
      font-variation-settings: 'wdth' 130, 'wght' 900;
      opacity: 1;
    }

    95% {
      font-variation-settings: 'wdth' 400, 'wght' 900;
      opacity: 1;
    }
    100% {
      font-variation-settings: 'wdth' 380, 'wght' 900;
      opacity: 1;
    }
  }

  @keyframes stretchyHeading2 {
    0% {
      font-variation-settings: 'wdth' 380, 'wght' 900;
      opacity: 1;
    }

    5% {
      font-variation-settings: 'wdth' 400, 'wght' 900;
      opacity: 1;
    }
    95% {
      font-variation-settings: 'wdth' 130, 'wght' 900;
      opacity: 1;
    }
    100% {
      font-variation-settings: 'wdth' 150, 'wght' 900;
      opacity: 1;
    }
  }
`


const theme = {
  colors: {
    primary: 'fuchsia'
  }
}

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <React.Fragment>
        <Head>
          <title>Dana Codes</title>
          <meta name="viewport" content="width=device-width, minimum-scale=1" />
          <meta name="description" content="Dana is a front end developer based in London, UK" />
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
