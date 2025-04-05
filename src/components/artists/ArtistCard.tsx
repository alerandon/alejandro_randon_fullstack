import React from 'react';
import ElementCard from '../common/ElementCard';

const ArtistCard: React.FC<{
  artistId: string;
  artistName: string;
  followers: number;
  imageUrl: string;
}> = ({ artistId, artistName, followers, imageUrl }) => {
  const artistSubtitle = `Seguidores: ${followers.toLocaleString()}`;
  const artistLinkTo = `/search/artists/${artistId}`;

  return (
    <ElementCard
      id={artistId}
      title={artistName}
      subtitle={artistSubtitle}
      imageUrl={imageUrl}
      linkTo={artistLinkTo}
    />
  );
};

export default ArtistCard;
