
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    //  Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          {/*  Output the styles in the head  */}
          {this.props.styleTags}
          <link rel="shortcut icon" href="/favicon.ico">

          <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
          <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
          <link rel="icon" type="image/png" href="/favicon-64x64.png" sizes="64x64" />
          <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
          <link rel="icon" type="image/png" href="/favicon-128x128.png" sizes="128x128" />
          <link rel="icon" type="image/png" href="/favicon-196x196.png" sizes="196x196" />

          <link rel="apple-touch-icon" href="touch-icon-iphone.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="touch-icon-ipad.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="touch-icon-iphone-retina.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="touch-icon-ipad-retina.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="touch-icon-ipad-pro.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="touch-icon-iphone-6plus.png" />
          <meta name="description" content="Dana is a front end developer based in London, UK" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
