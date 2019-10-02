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
    grey: '#666',
    shadow: 'rgba(0,0,0,0.2)'
  },
  typography: {
    baseFontSize: '1.3rem',
    baseSubtitleFontSize: '1.3rem',
    baseFontSizeMobile: '1rem',
    baseTitleFontSize: '4rem',
    baseTitleFontSizeMobile: '2rem'
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
    font-size: ${theme.typography.baseFontSize};
    svg.feather {
      height: ${theme.typography.baseFontSize};
      width: ${theme.typography.baseFontSize};
      vertical-align: text-bottom;
      margin: 0 .1rem;
    }
    p {
      margin-bottom: 1rem;
      margin-top: 0;
      &:last-child {
        margin-bottom: 0
      }
    }
    @media(max-width: 767px) {
      font-size: ${theme.typography.baseFontSizeMobile};
      line-height: 1.5rem;
      p {
        margin-bottom: .5rem;
      }

      svg.feather {
        height: ${theme.typography.baseFontSizeMobile};
        width: ${theme.typography.baseFontSizeMobile};
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
