import React from 'react';
import { Routes, Route } from 'react-router';

const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const SpotifyCallback = React.lazy(() => import('./components/callback/SpotifyCallback'));

const AppRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/spotify/callback" element={<SpotifyCallback />} />
      </Routes>
    </React.Suspense>
  );
};

export default AppRoutes;
