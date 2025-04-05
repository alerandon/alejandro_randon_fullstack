import React from 'react';
import { useParams } from 'react-router';
import ArtistDetail from '../components/artists/ArtistDetail';
import useArtistById from '../hooks/useArtistById';
import ArtistAlbumsListSection from '../components/artists/ArtistAlbumsListSection';

const ArtistDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { artist, error } = useArtistById(id || '');

  const formattedName = artist?.name.replace(/ /g, '+');
  const artistImageUrl =
    artist?.images[0]?.url ||
    `https://placehold.co/500/gray/white?text=${formattedName}`;
  console.log('ArtistDetailPage: ', artist);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!artist) {
    return <p>Cargando información del artista...</p>;
  }

  return (
    <>
      <ArtistDetail
        artistName={artist.name}
        artistImage={artistImageUrl}
        followers={artist.followers.total}
        monthlyListeners={artist.popularity}
      />
      <ArtistAlbumsListSection artist={artist} />
    </>
  );
};

export default ArtistDetailPage;
