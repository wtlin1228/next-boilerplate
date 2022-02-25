import type { UseQueryOptions } from 'react-query'

import { useQuery } from 'react-query'
import { httpGet } from '@/utils/http'

export interface IAuthenticateResponse {
  status: string
}

function authenticate({
  httpGetConfig = {},
}: {
  httpGetConfig?: RequestInit
} = {}) {
  return httpGet<IAuthenticateResponse>('/api/authenticate', httpGetConfig)
}

export default function useAuthenticateQuery({
  queryOptions = {},
  httpGetConfig = {},
}: {
  queryOptions?: UseQueryOptions<IAuthenticateResponse, Error>
  httpGetConfig?: RequestInit
} = {}) {
  return useQuery<IAuthenticateResponse, Error>(
    ['authenticate'],
    () => authenticate({ httpGetConfig }),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      ...queryOptions,
    }
  )
}
