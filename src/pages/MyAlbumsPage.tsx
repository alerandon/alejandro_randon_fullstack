import React from 'react';
import MyAlbumsHeroSection from '../components/albums/sections/MyAlbumsHeroSection';
import MyAlbumsListSection from '../components/albums/sections/MyAlbumsListSection';

const MyAlbumsPage: React.FC = () => {
  return (
    <>
      <MyAlbumsHeroSection />
      <MyAlbumsListSection />
    </>
  );
};

export default MyAlbumsPage;
