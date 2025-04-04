import React from 'react';

type AlbumCardProps = {
  albumName: string;
  publishedDate: string;
  imageUrl: string;
  onRemove: () => void;
};

const AlbumCard: React.FC<AlbumCardProps> = ({
  albumName,
  publishedDate,
  imageUrl,
  onRemove,
}) => {
  return (
    <div className="flex flex-col items-center rounded-3xl bg-transparent p-7 text-white hover:bg-[#D6F379] hover:text-gray-900 md:p-5">
      <img
        src={imageUrl}
        alt={albumName}
        className="mb-4 rounded-xl object-cover"
      />
      <div className="self-start pt-2">
        <h3 className="text-3xl font-semibold lg:text-2xl">{albumName}</h3>
        <p className="mt-4 text-sm font-semibold lg:text-xs">
          Publicado: {publishedDate}
        </p>
      </div>
      <button
        onClick={onRemove}
        className="xl: mt-5 w-5/7 cursor-pointer self-start rounded-full bg-[#E3513D] px-4 py-2 text-sm font-medium text-nowrap text-white md:w-6/7 lg:w-6/8 lg:text-xs"
      >
        - Remover album
      </button>
    </div>
  );
};

export default AlbumCard;
