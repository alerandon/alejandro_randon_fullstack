import React from 'react';
import AlbumCard from './AlbumCard';
import CardsPagination from '../common/CardsPagination';
import useUserSavedAlbums from '../../hooks/useUserSavedAlbums';

const MyAlbumsListSection: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const token = JSON.parse(
    sessionStorage.getItem('spotifyAccess') || '{}',
  ).access_token;

  const { albums, loading, error } = useUserSavedAlbums(token, currentPage);
  const totalPages = albums ? Math.ceil(albums.total / albums.limit) : 1;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return <div>Cargando álbumes...</div>;
  }
  if (error) {
    return <div>Error al cargar los álbumes: {error}</div>;
  }

  return (
    <div className="mt-12 flex w-full flex-col items-center md:mt-18">
      <div className="mx-auto flex w-full flex-col items-center gap-12 lg:gap-20">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {albums.items.map((album, index) => (
            <AlbumCard
              key={index}
              albumId={album.album.id}
              albumName={album.album.name}
              publishedDate={album.album.release_date}
              imageUrl={album.album.images[0]?.url}
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
