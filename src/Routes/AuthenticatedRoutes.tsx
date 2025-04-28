import { Navigate, Outlet, useLocation } from 'react-router-dom'
import AuthService from '../services/AuthService'

export function AuthenticatedRoutes() {
  const location = useLocation()
  const isAuthenticated = AuthService.isAuthenticated()

  return isAuthenticated ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  )
}
