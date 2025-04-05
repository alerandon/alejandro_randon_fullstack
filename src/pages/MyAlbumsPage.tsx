import React from 'react';
import MyAlbumsHeroSection from '../components/my-albums/MyAlbumsHeroSection';
import MyAlbumsListSection from '../components/my-albums/MyAlbumsListSection';

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
