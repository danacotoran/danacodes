import App from 'next/app'
import Head  from 'next/head'
import React from 'react'
import { ThemeProvider } from 'styled-components'

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
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
