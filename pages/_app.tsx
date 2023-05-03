import "../styles/globals.css";
import "../styles/button.css";
import "../styles/textField.css";
import "../styles/filter.css";

import Head from "next/head";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { Provider } from "react-redux";
import { store } from "@toolkit/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: 30000,
          },
        },
      })
  );

  return (
    <>
      <Head>
        <title>Title here</title>
        <meta name="description" content="description here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <main>
            <AnimatePresence mode="wait">
              <Component {...pageProps} key={router.route} />
              <ReactQueryDevtools initialIsOpen={true} />
            </AnimatePresence>
          </main>
        </Provider>
      </QueryClientProvider>
    </>
  );
}
