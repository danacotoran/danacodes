
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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
