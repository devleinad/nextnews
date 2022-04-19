import Document,{Html, Head, Main, NextScript} from 'next/document'
import React from 'react'

export class _document extends Document {
  render() {
    return (
      <Html>
          <Head>
              <meta property='custom' content='Testing'/>
          </Head>
          <body>
              <Main/>
          </body>
          <NextScript/>
      </Html>
    )
  }
}

export default _document