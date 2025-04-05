import React from 'react';
import MyAlbumsListSection from '../components/my-albums/MyAlbumsListSection';
import ArtistDetail from '../components/cards/ArtistDetail';

const ArtistDetailPage: React.FC = () => {
  return (
    <>
      <ArtistDetail
        artistName="Nombre del Artista"
        followers={123456}
        monthlyListeners={7890}
      />
      <div className="mt-8 md:mt-12 lg:mt-24">
        <p className="mb-3 text-sm leading-loose font-light md:w-4/5 md:pl-5 lg:w-3/5">
          Guarda tus albumes favoritos de {'ARTISTA'}
        </p>
        <MyAlbumsListSection />
      </div>
    </>
  );
};

export default ArtistDetailPage;
