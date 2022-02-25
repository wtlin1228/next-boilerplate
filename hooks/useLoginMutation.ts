import type { UseMutationOptions } from 'react-query'

import { useMutation } from 'react-query'
import { httpPOST } from '@/utils/http'

type IToken = string

interface ILoginResponse {
  status: string
}

const login = (token: IToken, httpPostConfig?: RequestInit) => {
  return httpPOST<ILoginResponse>('/api/login', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
    ...httpPostConfig,
  })
}

export default function useLoginMutation({
  mutationOptions = {},
  httpPostConfig = {},
}: {
  mutationOptions?: UseMutationOptions<ILoginResponse, Error, IToken>
  httpPostConfig?: RequestInit
} = {}) {
  return useMutation<ILoginResponse, Error, IToken>(
    (token: IToken) => login(token, httpPostConfig),
    mutationOptions
  )
}
