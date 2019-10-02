import App from 'next/app'
import Head  from 'next/head'
import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'


const theme = {
  colours: {
    background: '#fefefe',
    text: '#17181A',
    accent: '#006161',
    success: '#006161',
    error: '#AD0000',
    grey: '#666'
  }
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Bandeins Strange Variable';
    src: url('/static/fonts/BandeinsStrangeVariableGX.ttf');
  }
  body {
    margin: 0 !important;
    padding-bottom: 3rem;
    color: ${theme.colours.text};
    background-color: ${theme.colours.background};
    font-family: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
    font-size: 1.3rem;
    p {
      margin-bottom: 1rem;
      margin-top: 0;
      &:last-child {
        margin-bottom: 0
      }
    }
    @media(max-width: 480px) {
      font-size: 1rem;
      line-height: 1.5rem;
      p {
        margin-bottom: .5rem;
      }
    }
  }
`

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
