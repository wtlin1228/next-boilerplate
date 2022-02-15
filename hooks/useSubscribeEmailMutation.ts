import type { UseMutationOptions } from 'react-query'

import { useMutation } from 'react-query'
import { httpPOST } from '@/utils/http'

type IEmail = string

interface ISubscribedEmail {
  email: IEmail
}

const subscribeEmail = (email: IEmail, httpPostConfig?: RequestInit) => {
  return httpPOST<ISubscribedEmail>('api/subscribe', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
    ...httpPostConfig,
  })
}

export default function useSubscribeEmailMutation({
  mutationOptions = {},
  httpPostConfig = {},
}: {
  mutationOptions?: UseMutationOptions<ISubscribedEmail, Error, IEmail>
  httpPostConfig?: RequestInit
} = {}) {
  return useMutation<ISubscribedEmail, Error, IEmail>(
    (email: IEmail) => subscribeEmail(email, httpPostConfig),
    {
      onSuccess: (data, variables, context) => {
        console.log('subscribe success', data.email)
      },
      ...mutationOptions,
    }
  )
}
