import Document, { Html, Head, Main, NextScript } from 'next/document'

const MyHead = () => (
  <Head>
    <title>Dana Codes</title>
    <meta name="viewport" content="width=device-width, minimum-scale=1" />
    <meta name="description" content="Dana is a front end developer based in London, UK" />
  </Head>
);

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <MyHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
