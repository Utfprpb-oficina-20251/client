import { AuthenticatedRoutes } from './AuthenticatedRoutes.tsx'
import { Route, Routes } from 'react-router-dom'
import { HomeProjetosListPage } from '../projetos/HomeProjetosListPage.tsx'
import { TestPage } from '../pages/TestPage.tsx'

export function BaseRoutes() {
  return (
    <>
      <Routes>
        {/*Public Routes*/}
        <Route path="/" element={<HomeProjetosListPage />} />
        <Route path="/TestPage" element={<TestPage />} />
        {/*Private Routes*/}
        <Route element={<AuthenticatedRoutes />} />
      </Routes>
    </>
  )
}
