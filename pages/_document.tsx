import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;600;700;800&&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'
            rel='stylesheet'
          />
          <meta name="google-site-verification" content="QKz0iVRYbRCYxErp4h5sFoAQACcvxIPYU0bXWHD1lUU" />
          <meta property="og:site_name" content="비어랏" />
          <meta property="og:title" content="오늘도 수고한 당신, 맥주 한 잔 비어랏!" />
          <meta property="og:description" content="맥주 검색, 추천, 기록까지 한 번에 – 오늘 마실 맥주, 비어랏에서 골라요." />
          <meta property="og:url" content="https://beerlot.site/" />
          <meta property="og:image" content="https://www.beerlot.site/images/beerlot-preview-default-image.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="오늘도 수고한 당신, 맥주 한 잔 비어랏!" />
          <meta name="twitter:description" content="맥주 검색, 추천, 기록까지 한 번에 – 오늘 마실 맥주, 비어랏에서 골라요." />
          <meta name="twitter:image" content="https://www.beerlot.site/images/beerlot-preview-default-image.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
