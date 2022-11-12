import {
  Box,
  ChakraProvider,
  useToast,
  UseToastOptions,
} from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { BottomNav } from "../common/BottomNav";
import "../styles/globals.css";
import { theme } from "../src/styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const toast = useToast();
  const handleToast = (options: UseToastOptions) => {
    const defaultOptions: UseToastOptions = {
      status: "info",
      duration: 5000,
      isClosable: true,
    };

    toast({
      ...defaultOptions,
      ...options,
    });
  };
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {},
        },
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RecoilRoot>
          <ChakraProvider theme={theme}>
            <ErrorBoundary fallback={<div>error</div>}>
              <Component {...pageProps} />
              <BottomNav />
            </ErrorBoundary>
          </ChakraProvider>
        </RecoilRoot>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
