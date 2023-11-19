import Document, { Html, Head, Main, NextScript } from "next/document";

// A custom Document can update the <html> and <body> tags used to render a Page.

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
// _document is only rendered on the server, so event handlers like onClick cannot be used in this file.
// <Html>, <Head />, <Main /> and <NextScript /> are required for the page to be properly rendered.
