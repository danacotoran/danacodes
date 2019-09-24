
import Document, { Head, Main, NextScript } from 'next/document';
import styled, { ServerStyleSheet, createGlobalStyle } from 'styled-components'

const StyledBody = styled.body`
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

`

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
        <StyledBody>
          <Main />
          <NextScript />
        </StyledBody>
      </html>
    );
  }
}
