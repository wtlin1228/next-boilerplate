import type { ReactNode } from 'react'

import { useAuthenticateContext } from '@/modules/Authenticate'
import Login from '@/components/Login'

interface IWithAuthenticateProps {
  children: ReactNode
}

export default function WithAuthenticate({ children }: IWithAuthenticateProps) {
  const { isAuthenticating, isAuthenticated } = useAuthenticateContext()

  if (isAuthenticating) {
    return <div>Authenticating...</div>
  }

  if (!isAuthenticated) {
    return (
      <div>
        <h1>You are not authenticated</h1>
        <Login />
      </div>
    )
  }

  return <>{children}</>
}
