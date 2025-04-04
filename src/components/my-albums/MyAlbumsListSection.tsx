import React from 'react';
import AlbumCard from '../cards/AlbumCard';
import CardsPagination from '../cards/CardsPagination';

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

const MyAlbumsListSection: React.FC = () => {
  const totalPages = 20;
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="mx-auto flex w-full flex-col items-center gap-12 lg:gap-20">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {albums.map((artist, index) => (
          <AlbumCard
            key={index}
            albumName={artist.albumName}
            publishedDate={artist.publishedDate}
            imageUrl={artist.imageUrl}
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
  );
};

export default MyAlbumsListSection;
