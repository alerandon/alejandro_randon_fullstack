import React from 'react';
import AlbumGrid from '../../common/AlbumGrid';
import CardsPagination from '../../common/CardsPagination';
import useUserSavedAlbums from '../../../hooks/albums/useUserSavedAlbums';

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
    return <div className="mt-20 text-[#D6F379]">Cargando álbumes...</div>;
  }
  if (error) {
    return (
      <div className="mt-20 text-[#D6F379]">
        Error al cargar los álbumes: {error}
      </div>
    );
  }

  console.log('Albums:', albums);

  return (
    <div className="mt-12 flex w-full flex-col items-center md:mt-18">
      <div className="mx-auto flex w-full flex-col items-center gap-12 lg:gap-20">
        <AlbumGrid
          albums={albums!.items.map((album) => ({
            id: album.id,
            name: album.name,
            publishedDate: album.publishedDate,
            imageUrl: album.imageUrl,
          }))}
          emptyMessage="No tienes álbumes guardados."
        />
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
