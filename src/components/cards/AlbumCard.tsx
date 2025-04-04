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
    <div className="flex flex-col items-center rounded-lg bg-transparent p-6 text-white shadow-md">
      <img
        src={imageUrl}
        alt={albumName}
        className="mb-4 h-48 w-48 rounded-lg object-cover"
      />
      <h3 className="text-lg font-semibold">{albumName}</h3>
      <p className="text-sm text-gray-400">Publicado: {publishedDate}</p>
      <button
        onClick={onRemove}
        className="mt-4 rounded bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
      >
        - Remove album
      </button>
    </div>
  );
};

export default AlbumCard;
