// _document.js
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../theme'; // 确保路径正确

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;


    const initialProps = await Document.getInitialProps(ctx);


    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Inject emotion styles */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
