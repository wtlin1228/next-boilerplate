import type { ReactNode } from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'

const createReactQueryWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  return function reactQueryWrapper({ children }: { children: ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )
  }
}

export default createReactQueryWrapper
