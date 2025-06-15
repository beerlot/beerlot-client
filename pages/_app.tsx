import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ErrorBoundary } from 'react-error-boundary'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { BottomNav } from '../src/components/shared/BottomNav'
import '../styles/globals.css'
import { theme } from '../styles/theme'
import ReactGA from 'react-ga4'
import { useEffect } from 'react'
import Head from 'next/head'

// TODO: move to env
const REACT_APP_GA_TRACKING_ID = 'G-TTNFK5BWQG'

const gaTrackingId = REACT_APP_GA_TRACKING_ID
ReactGA.initialize(gaTrackingId, {
  gtagOptions: {
    debug_mode: true,
  },
})
ReactGA.send({ hitType: 'pageview' })

function ForceLightMode({ children }: { children: React.ReactNode }) {
  const { setColorMode } = useColorMode()
  useEffect(() => {
    setColorMode('light')
  }, [setColorMode])
  return <>{children}</>
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
          <meta name="google-site-verification" content="QKz0iVRYbRCYxErp4h5sFoAQACcvxIPYU0bXWHD1lUU" />
          
          {/* Primary Meta Tags */}
          <title>오늘도 수고한 당신, 맥주 한 잔 비어랏!</title>
          <meta name="title" content="오늘도 수고한 당신, 맥주 한 잔 비어랏!" />
          <meta name="description" content="맥주 검색, 추천, 기록까지 한 번에 – 오늘 마실 맥주, 비어랏에서 골라요." />
          <meta name="keywords" content="편의점 맥주, 맥주 리뷰, 맥주 별점, 편의점 맥주 검색, 편의점 맥주 필터링" />
          <link rel='icon' href='/favicon.ico' />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://beerlot.site/" />
          <meta property="og:site_name" content="비어랏" />
          <meta property="og:title" content="오늘도 수고한 당신, 맥주 한 잔 비어랏!" />
          <meta property="og:description" content="맥주 검색, 추천, 기록까지 한 번에 – 오늘 마실 맥주, 비어랏에서 골라요." />
          <meta property="og:image" content="https://beerlot.site/images/beerlot-preview-default-image.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content="https://beerlot.site/" />
          <meta name="twitter:title" content="오늘도 수고한 당신, 맥주 한 잔 비어랏!" />
          <meta name="twitter:description" content="맥주 검색, 추천, 기록까지 한 번에 – 오늘 마실 맥주, 비어랏에서 골라요." />
          <meta name="twitter:image" content="https://beerlot.site/images/beerlot-preview-default-image.jpg" />
        </Head>
        <ChakraProvider theme={theme}>
          <ForceLightMode>
            <ErrorBoundary fallback={<div>error</div>}>
              <Component {...pageProps} />
              <BottomNav />
            </ErrorBoundary>
          </ForceLightMode>
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
