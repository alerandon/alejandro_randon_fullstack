import React from 'react';
import { Link } from 'react-router';

const ArtistCard: React.FC<{
  id: string;
  artistName: string;
  followers: number;
  imageUrl: string;
}> = ({ id, artistName, followers, imageUrl }) => {
  const linkTo = `/search/artists/${id}`;
  const formattedName = artistName.replace(/ /g, '+');
  const finalImageUrl =
    imageUrl || `https://placehold.co/500/gray/white?text=${formattedName}`;

  return (
    <Link
      to={linkTo}
      className="flex flex-col items-center rounded-3xl bg-transparent p-7 text-white hover:bg-[#D6F379] hover:text-gray-900 md:p-5"
    >
      <img
        src={finalImageUrl}
        alt={artistName}
        className="mb-4 h-44 max-h-44 w-44 max-w-44 rounded-xl object-fill"
      />
      <div className="self-start pt-2">
        <h3 className="text-3xl font-semibold lg:text-2xl">{artistName}</h3>
        <p className="pt-4 text-sm font-semibold lg:text-xs">
          Followers: {followers.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

export default ArtistCard;
