import React from 'react';
import { Routes, Route } from 'react-router';
import UserLayout from './components/user/UserLayout';

const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const SpotifyCallback = React.lazy(() => import('./pages/SpotifyCallback'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));
const ArtistDetailPage = React.lazy(() => import('./pages/ArtistDetailPage'));
const MyAlbumsPage = React.lazy(() => import('./pages/MyAlbumsPage'));

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
            path="artists/:id"
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
