import React from 'react';

const ArtistCard: React.FC<{
  artistName: string;
  followers: number;
  imageUrl: string;
}> = ({ artistName, followers, imageUrl }) => {
  return (
    <div className="flex flex-col items-center rounded-3xl bg-transparent p-7 text-white shadow-lg hover:bg-[#D6F379] hover:text-gray-900 md:p-5">
      <img
        src={imageUrl}
        alt={artistName}
        className="mb-4 rounded-xl object-cover"
      />
      <div className="self-start pt-2">
        <h3 className="text-3xl font-semibold lg:text-2xl">{artistName}</h3>
        <p className="pt-4 text-sm font-semibold lg:text-xs">
          Followers: {followers.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ArtistCard;
