import { ReactNode, useState } from 'react'

import { useMemo } from 'react'
import AuthenticateContext from './context'

import useAuthenticateQuery from '@/hooks/useAuthenticateQuery'

interface IAuthenticateProviderProps {
  children: ReactNode
}

export default function AuthenticateProvider({
  children,
}: IAuthenticateProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const { isLoading } = useAuthenticateQuery({
    queryOptions: {
      onSuccess: (data) => {
        if (data.status === 'success') {
          setIsAuthenticated(true)
        }
      },
      onError: () => {
        setIsAuthenticated(false)
      },
    },
  })

  const value = useMemo(
    () => ({
      isAuthenticating: isLoading,
      isAuthenticated,
    }),
    [isAuthenticated, isLoading]
  )

  return (
    <AuthenticateContext.Provider value={value}>
      {children}
    </AuthenticateContext.Provider>
  )
}
