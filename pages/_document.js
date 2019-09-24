
import Document, { Head, Main, NextScript } from 'next/document';
import styled, { ServerStyleSheet, createGlobalStyle } from 'styled-components'

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
`;


const StyledBody = styled.body`
  margin: 0 !important;
  padding: 0 !important;
  color: rgb(23,24,26);
  /* background-color: rgb(23,24,26); */
  background-color: rgb(240,240,240);
  /* color: rgb(213,213,213); */
  font-family: -apple-system, system-ui, BlinkMacSystemFont, sans-serif;
  font-size: 1.5rem;
  @media(max-width: 375px) {
    font-size: 1.3rem
    p {
      margin-top: .3rem;
      margin-bottom: .3rem;
    }
  }
  p {
    margin-top: 1rem;
    margin-bottom: 1rem;
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
        <GlobalStyle />
          <Main />
          <NextScript />
        </StyledBody>
      </html>
    );
  }
}
