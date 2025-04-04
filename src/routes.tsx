import React from 'react';
import { Routes, Route } from 'react-router';
import UserLayout from './components/user/UserLayout';
import MyAlbumsPage from './pages/MyAlbumsPage';
import ArtistDetailPage from './pages/ArtistDetailPage';

const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const SpotifyCallback = React.lazy(
  () => import('./components/callback/SpotifyCallback'),
);

const AppRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/spotify/callback" element={<SpotifyCallback />} />
        <Route path="/search">
          <Route
            index
            element={
              <UserLayout>
                <SearchPage />
              </UserLayout>
            }
          />
          <Route
            path="artist/:id"
            element={
              <UserLayout>
                <ArtistDetailPage />
              </UserLayout>
            }
          />
        </Route>
        <Route
          path="/my-albums"
          element={
            <UserLayout>
              <MyAlbumsPage />
            </UserLayout>
          }
        />
      </Routes>
    </React.Suspense>
  );
};

export default AppRoutes;
