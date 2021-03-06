import type { AppProps } from 'next/app'

import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@/styles/GlobalStyle'
import theme from '@/styles/theme'

import { AuthenticateProvider } from '@/modules/Authenticate'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <AuthenticateProvider>
            <Component {...pageProps} />
          </AuthenticateProvider>
        </ThemeProvider>
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
