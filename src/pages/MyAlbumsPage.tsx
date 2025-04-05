import React from 'react';
import MyAlbumsHeroSection from '../components/albums/MyAlbumsHeroSection';
import MyAlbumsListSection from '../components/albums/MyAlbumsListSection';

const MyAlbumsPage: React.FC = () => {
  return (
    <>
      <MyAlbumsHeroSection />
      <div className="mt-12 md:mt-18">
        <MyAlbumsListSection />
      </div>
    </>
  );
};

export default MyAlbumsPage;
