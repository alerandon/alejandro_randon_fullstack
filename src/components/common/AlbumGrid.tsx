import React from 'react';
import AlbumCard from '../albums/AlbumCard';
import { SpotifyAlbum } from '../../types/albums';

interface AlbumGridProps {
  albums: SpotifyAlbum[];
  emptyMessage?: string;
}

const AlbumGrid: React.FC<AlbumGridProps> = ({ albums, emptyMessage }) => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {albums.length > 0 ? (
        albums.map((album, index) => <AlbumCard key={index} album={album} />)
      ) : (
        <p className="col-span-full my-10 text-center text-base text-[#D6F379]">
          {emptyMessage || 'No se encontraron álbumes.'}
        </p>
      )}
    </div>
  );
};

export default AlbumGrid;
