import { Suspense, lazy, FC } from 'react';
import { Routes, Route } from 'react-router';
import Layout from './components/layout/LoginLayout';

const LoginPage = lazy(() => import('./pages/LoginPage'));

const AppRoutes: FC = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default AppRoutes;
