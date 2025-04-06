import React from 'react';
import MyAlbumsHeroSection from '../../components/albums/sections/MyAlbumsHeroSection';
import MyAlbumsListSection from '../../components/albums/sections/MyAlbumsListSection';
import useSpotifyAuthGuard from '../../hooks/auth/useSpotifyAuthGuard';

const MyAlbumsPage: React.FC = () => {
  useSpotifyAuthGuard();

  return (
    <>
      <MyAlbumsHeroSection />
      <MyAlbumsListSection />
    </>
  );
};

export default MyAlbumsPage;
