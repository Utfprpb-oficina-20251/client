import { useState } from 'react'
import {
  AuthenticatedUser,
  AuthenticationResponse,
} from '../../commons/interfaces'
import { api } from '../../libs/axios'

export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] =
    useState<AuthenticatedUser>()

  function handleLogin(response: AuthenticationResponse) {
    localStorage.setItem('token', response.token)
    localStorage.setItem('user', JSON.stringify(response.user))

    api.defaults.headers.common['Authorization'] = `Bearer ${response.token}`
    setAuthenticatedUser(response.user)
    setAuthenticated(true)
  }

  function handleLogout() {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setAuthenticatedUser(undefined)
    setAuthenticated(false)

    delete api.defaults.headers.common['Authorization']
  }

  return {
    authenticated,
    authenticatedUser,
    handleLogin,
    handleLogout,
  }
}
