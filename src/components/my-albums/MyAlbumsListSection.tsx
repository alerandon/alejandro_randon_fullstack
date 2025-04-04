import React from 'react';
import AlbumCard from '../cards/AlbumCard';

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
];

const removeAlbum = () => {
  // Logic to remove the album from the list
  console.log(`Removing album...`);
};

const MyAlbumsListSection: React.FC = () => {
  return (
    <div>
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
  );
};

export default MyAlbumsListSection;
