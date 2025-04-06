import React from 'react';
import { useParams } from 'react-router';
import ArtistDetailSection from '../../components/artists/sections/ArtistDetailSection';
import useArtistById from '../../hooks/artists/useArtistById';
import ArtistAlbumsListSection from '../../components/artists/sections/ArtistAlbumsListSection';
import useSpotifyAuthGuard from '../../hooks/auth/useSpotifyAuthGuard';

const ArtistDetailPage: React.FC = () => {
  useSpotifyAuthGuard();

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
      <ArtistDetailSection artist={artist} />
      <ArtistAlbumsListSection artist={artist} />
    </>
  );
};

export default ArtistDetailPage;
