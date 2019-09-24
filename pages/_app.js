import App from 'next/app'
import Head  from 'next/head'
import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'


const theme = {
  colors: {
    primary: 'fuchsia'
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
    color: rgb(23,24,26);
    background-color: rgb(245,245,245);
    font-family: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
    font-size: 1.5rem;
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
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
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
