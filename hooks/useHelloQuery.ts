import type { QueryClient, UseQueryOptions } from 'react-query'

import { useQuery } from 'react-query'
import { httpGet } from '@/utils/http'

interface IHello {
  name: string
}

const HelloQueryKey = ['hello']

const getHello = ({
  httpGetConfig = {},
}: { httpGetConfig?: RequestInit } = {}) => {
  return httpGet<IHello>('/api/hello', httpGetConfig)
}

export const prefetchHelloQuery = (queryClient: QueryClient) => {
  return queryClient.prefetchQuery(HelloQueryKey, () => getHello())
}

export default function useHelloQuery({
  queryOptions = {},
  httpGetConfig = {},
}: {
  queryOptions?: UseQueryOptions<IHello, Error>
  httpGetConfig?: RequestInit
} = {}) {
  return useQuery<IHello, Error>(
    HelloQueryKey,
    () => getHello({ httpGetConfig }),
    queryOptions
  )
}
