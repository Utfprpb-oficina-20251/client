import { AuthenticatedRoutes } from './AuthenticatedRoutes.tsx'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage.tsx'
import { TestPage } from '../pages/TestPage.tsx'

export function BaseRoutes() {
  return (
    <>
      <Routes>
        {/*Public Routes*/}
        <Route path="/" element={<HomePage />} />
        <Route path="/TestPage" element={<TestPage />} />
        {/*Private Routes*/}
        <Route element={<AuthenticatedRoutes />} />
      </Routes>
    </>
  )
}
