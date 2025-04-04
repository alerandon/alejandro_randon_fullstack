import React from 'react';
import MyAlbumsHeroSection from '../components/my-albums/MyAlbumsHeroSection';
import MyAlbumsListSection from '../components/my-albums/MyAlbumsListSection';

const MyAlbumsPage: React.FC = () => {
  return (
    <>
      <MyAlbumsHeroSection />
      <MyAlbumsListSection />
    </>
  );
};

export default MyAlbumsPage;
