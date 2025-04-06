import React from 'react';
import CardsPagination from '../../common/CardsPagination';
import { SpotifyArtist } from '../../../types/artists';
import useArtistAlbums from '../../../hooks/albums/useArtistAlbums';
import AlbumGrid from '../../common/AlbumGrid';

interface ArtistAlbumsListProps {
  artist: SpotifyArtist;
}

const ArtistAlbumsListSection: React.FC<ArtistAlbumsListProps> = ({
  artist,
}) => {
  const token = JSON.parse(
    sessionStorage.getItem('spotifyAccess') || '{}',
  ).access_token;

  const [currentPage, setCurrentPage] = React.useState(1);
  const { albums, loading, error } = useArtistAlbums(
    artist.id,
    token,
    currentPage,
  );
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

  return (
    <div className="mt-8 md:mt-12 lg:mt-24">
      <p className="mb-3 text-sm leading-loose font-light md:w-4/5 md:pl-5 lg:w-3/5">
        Guarda tus albumes favoritos de {artist.name}
      </p>
      <div className="mx-auto flex w-full flex-col items-center gap-12 lg:gap-20">
        <AlbumGrid
          albums={albums?.items!}
          emptyMessage="No se encontraron álbumes para este artista."
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

export default ArtistAlbumsListSection;
