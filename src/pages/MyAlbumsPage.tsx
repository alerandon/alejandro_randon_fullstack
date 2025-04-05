import React from 'react';
import MyAlbumsHeroSection from '../components/albums/MyAlbumsHeroSection';
import MyAlbumsListSection from '../components/albums/MyAlbumsListSection';

const MyAlbumsPage: React.FC = () => {
  return (
    <>
      <MyAlbumsHeroSection />
      <MyAlbumsListSection />
    </>
  );
};

export default MyAlbumsPage;
