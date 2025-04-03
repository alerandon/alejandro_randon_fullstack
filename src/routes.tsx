import { Suspense, lazy, FC } from 'react';
import { Routes, Route } from 'react-router';

const LoginPage = lazy(() => import('./pages/LoginPage'));

const AppRoutes: FC = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
