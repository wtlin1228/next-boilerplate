import type { IAuthenticateContext } from './type'
import { useContext } from 'react'
import AuthenticateContext from './context'

export default function useAuthenticateContext(): IAuthenticateContext {
  const authenticateContext = useContext(AuthenticateContext)

  if (authenticateContext === null) {
    throw new Error(
      'useAuthenticateContext must be wrapped by AuthenticateProvider'
    )
  }

  return authenticateContext
}
