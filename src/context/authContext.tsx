import { createContext } from 'react'
import {
  AuthenticatedUser,
  AuthenticationResponse,
} from '../commons/interfaces'
import { useAuth } from './hooks/useAuth.ts'
import * as React from 'react'

interface AuthContextType {
  authenticated: boolean
  authenticatedUser?: AuthenticatedUser
  handleLogin: (response: AuthenticationResponse) => void
  handleLogout: () => void
}

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
  const {
    authenticated,
    authenticatedUser,
    handleLogin,
    handleLogout,
  } = useAuth()
  return (
    <AuthContext
      value={{
        authenticated,
        authenticatedUser,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext>
  )
}
