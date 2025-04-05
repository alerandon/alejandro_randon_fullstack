import React from 'react';
import { useParams } from 'react-router';
import ArtistDetail from '../components/artists/ArtistDetail';
import useArtistById from '../hooks/useArtistById';
import ArtistAlbumsListSection from '../components/artists/ArtistAlbumsListSection';

const ArtistDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { artist, error } = useArtistById(id || '');
  console.log('ArtistDetailPage: ', artist);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }
  if (!artist) {
    return <p>Cargando información del artista...</p>;
  }

  return (
    <>
      <ArtistDetail artist={artist} />
      <ArtistAlbumsListSection artist={artist} />
    </>
  );
};

export default ArtistDetailPage;
