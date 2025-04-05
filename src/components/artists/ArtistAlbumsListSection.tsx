import React from 'react';
import AlbumCard from '../albums/AlbumCard';
import CardsPagination from '../common/CardsPagination';
import { SpotifyArtist } from '../../types/artists';
import useArtistAlbums from '../../hooks/useArtistAlbums';

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
    return <p>Cargando álbumes...</p>;
  }

  if (error) {
    return <p>Error al cargar los álbumes: {error}</p>;
  }

  return (
    <div className="mt-8 md:mt-12 lg:mt-24">
      <p className="mb-3 text-sm leading-loose font-light md:w-4/5 md:pl-5 lg:w-3/5">
        Guarda tus albumes favoritos de {artist.name}
      </p>
      <div className="mx-auto flex w-full flex-col items-center gap-12 lg:gap-20">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {albums && albums.items?.length > 0 ? (
            albums.items.map((album, index) => (
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
              No se encontraron álbumes para este artista.
            </p>
          )}
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
