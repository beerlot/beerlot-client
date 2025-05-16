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
