import React from 'react';
import AlbumCard from '../albums/AlbumCard';

interface AlbumGridProps {
  albums: Array<{
    id: string;
    name: string;
    release_date: string;
    images: Array<{ url: string }>;
  }>;
  emptyMessage?: string;
}

const AlbumGrid: React.FC<AlbumGridProps> = ({ albums, emptyMessage }) => {
  return (
    <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {albums.length > 0 ? (
        albums.map((album, index) => (
          <AlbumCard
            key={index}
            albumId={album.id}
            albumName={album.name}
            publishedDate={album.release_date}
            imageUrl={album.images[0]?.url}
          />
        ))
      ) : (
        <p className="col-span-full my-10 text-center text-base text-[#D6F379]">
          {emptyMessage || 'No se encontraron álbumes.'}
        </p>
      )}
    </div>
  );
};

export default AlbumGrid;
