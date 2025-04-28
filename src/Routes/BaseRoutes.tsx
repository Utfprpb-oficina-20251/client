import { AuthenticatedRoutes } from './AuthenticatedRoutes.tsx'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage.tsx'

export function BaseRoutes() {
  return (
    <>
      <Routes>
        {/*Public Routes*/}
        <Route path="/" element={<HomePage />} />
        {/*Private Routes*/}
        <Route element={<AuthenticatedRoutes />} />
      </Routes>
    </>
  )
}
