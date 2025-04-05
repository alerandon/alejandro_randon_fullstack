import React from 'react';
import AlbumCard from '../albums/AlbumCard';
import CardsPagination from '../common/CardsPagination';
import { SpotifyArtist } from '../../types/artists';

const albums = [
  {
    albumName: 'Taylor Swift',
    publishedDate: '2023-01-01',
    followers: 12000000,
    imageUrl: 'https://placehold.co/500',
  },
  {
    albumName: 'Ed Sheeran',
    publishedDate: '2023-01-01',
    followers: 15000000,
    imageUrl: 'https://placehold.co/500',
  },
  {
    albumName: 'Adele',
    publishedDate: '2023-01-01',
    followers: 18000000,
    imageUrl: 'https://placehold.co/500',
  },
  {
    albumName: 'Billie Eilish',
    publishedDate: '2023-01-01',
    followers: 20000000,
    imageUrl: 'https://placehold.co/500',
  },
  {
    albumName: 'Taylor Swift',
    publishedDate: '2023-01-01',
    followers: 12000000,
    imageUrl: 'https://placehold.co/500',
  },
  {
    albumName: 'Ed Sheeran',
    publishedDate: '2023-01-01',
    followers: 15000000,
    imageUrl: 'https://placehold.co/500',
  },
  {
    albumName: 'Adele',
    publishedDate: '2023-01-01',
    followers: 18000000,
    imageUrl: 'https://placehold.co/500',
  },
  {
    albumName: 'Billie Eilish',
    publishedDate: '2023-01-01',
    followers: 20000000,
    imageUrl: 'https://placehold.co/500',
  },
];

const removeAlbum = () => {
  // Logic to remove the album from the list
  console.log(`Removing album...`);
};

interface ArtistAlbumsListProps {
  artist: SpotifyArtist;
}

const ArtistAlbumsListSection: React.FC<ArtistAlbumsListProps> = ({
  artist,
}) => {
  const totalPages = 20;
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="mt-8 md:mt-12 lg:mt-24">
      <p className="mb-3 text-sm leading-loose font-light md:w-4/5 md:pl-5 lg:w-3/5">
        Guarda tus albumes favoritos de {artist.name}
      </p>
      <div className="mx-auto flex w-full flex-col items-center gap-12 lg:gap-20">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {albums.map((album, index) => (
            <AlbumCard
              key={index}
              albumName={album.albumName}
              publishedDate={album.publishedDate}
              imageUrl={album.imageUrl}
              onRemove={removeAlbum}
            />
          ))}
        </div>
        <CardsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ArtistAlbumsListSection;
