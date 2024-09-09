'use client'

import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QUERY_RETRY_COUNT, STALE_TIME_MS } from './constants'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: QUERY_RETRY_COUNT,
      staleTime: STALE_TIME_MS,
    },
  },
})

export const QueryProvider = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
    {children}

    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)
