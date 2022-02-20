import type { UseQueryOptions } from 'react-query'

import { useQuery } from 'react-query'
import { httpGet } from '@/utils/http'

interface IHello {
  name: string
}

export default function useHelloQuery({
  queryOptions = {},
  httpGetConfig = {},
}: {
  queryOptions?: UseQueryOptions<IHello, Error>
  httpGetConfig?: RequestInit
} = {}) {
  return useQuery<IHello, Error>(
    ['hello'],
    () => httpGet<IHello>('/api/hello', httpGetConfig),
    queryOptions
  )
}
