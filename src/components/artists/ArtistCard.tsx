import React from 'react';
import ElementCard from '../common/ElementCard';
import { SpotifyArtist } from '../../types/artists';

const ArtistCard: React.FC<{
  artist: SpotifyArtist;
}> = ({ artist }) => {
  const artistSubtitle = `Seguidores: ${artist.followers.toLocaleString()}`;
  const artistLinkTo = `/search/artists/${artist.id}`;

  return (
    <ElementCard
      title={artist.name}
      subtitle={artistSubtitle}
      imageUrl={artist.imageUrl}
      linkTo={artistLinkTo}
    />
  );
};

export default ArtistCard;
