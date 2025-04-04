import { Suspense, lazy, FC } from 'react';
import { Routes, Route } from 'react-router';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const SpotifyCallback = lazy(() => import('./components/callback/SpotifyCallback'));

const AppRoutes: FC = () => {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/spotify/callback" element={<SpotifyCallback />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
