import React from 'react';
import AlbumCard from './AlbumCard';
import CardsPagination from '../common/CardsPagination';

const albums = [
  {
    id: '1',
    albumName: 'Taylor Swift',
    publishedDate: '2023-01-01',
    followers: 12000000,
    imageUrl: 'https://placehold.co/500',
  },
  {
    id: '2',
    albumName: 'Ed Sheeran',
    publishedDate: '2023-01-01',
    followers: 15000000,
    imageUrl: 'https://placehold.co/500',
  },
  {
    id: '3',
    albumName: 'Adele',
    publishedDate: '2023-01-01',
    followers: 18000000,
    imageUrl: 'https://placehold.co/500',
  },
  {
    id: '4',
    albumName: 'Billie Eilish',
    publishedDate: '2023-01-01',
    followers: 20000000,
    imageUrl: 'https://placehold.co/500',
  },
  {
    id: '5',
    albumName: 'Taylor Swift',
    publishedDate: '2023-01-01',
    followers: 12000000,
    imageUrl: 'https://placehold.co/500',
  },
  {
    id: '6',
    albumName: 'Ed Sheeran',
    publishedDate: '2023-01-01',
    followers: 15000000,
    imageUrl: 'https://placehold.co/500',
  },
  {
    id: '7',
    albumName: 'Adele',
    publishedDate: '2023-01-01',
    followers: 18000000,
    imageUrl: 'https://placehold.co/500',
  },
  {
    id: '8',
    albumName: 'Billie Eilish',
    publishedDate: '2023-01-01',
    followers: 20000000,
    imageUrl: 'https://placehold.co/500',
  },
];

const MyAlbumsListSection: React.FC = () => {
  const totalPages = 20;
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="mt-12 flex w-full flex-col items-center md:mt-18">
      <div className="mx-auto flex w-full flex-col items-center gap-12 lg:gap-20">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {albums.map((album, index) => (
            <AlbumCard
              key={index}
              albumId={album.id}
              albumName={album.albumName}
              publishedDate={album.publishedDate}
              imageUrl={album.imageUrl}
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

export default MyAlbumsListSection;
