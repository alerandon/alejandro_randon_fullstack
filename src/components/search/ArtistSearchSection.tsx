import React from 'react';
import CardsPagination from '../common/CardsPagination';
import ArtistCard from '../artists/ArtistCard';
import useArtistSearch from '../../hooks/useArtistSearch';

const ArtistSearchSection: React.FC = () => {
  const { artists, searchArtists } = useArtistSearch();

  const totalPages = artists ? Math.ceil(artists.total / artists.limit) : 1;
  const [currentPage, setCurrentPage] = React.useState(1);
  const searchValue = React.useRef<string>('');

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearch = (query: string) => {
    if (currentPage > 1) setCurrentPage(1);
    searchArtists(query);
  };

  React.useEffect(() => {
    if (searchValue.current) {
      searchArtists(searchValue.current, currentPage);
    }
  }, [currentPage]);

  return (
    <div className="mx-auto mt-8 flex w-full flex-col items-center gap-12 md:mt-20 lg:mt-10 lg:gap-20">
      <div className="flex w-full items-center rounded-full bg-white px-4 py-2 shadow-md lg:w-3/4">
        <input
          type="text"
          placeholder="Search for an artist..."
          className="w-1/2 flex-grow bg-transparent pr-2.5 text-sm text-black placeholder-gray-500 outline-none"
          onKeyDown={(e) => {
            const input = e.target as HTMLInputElement;
            searchValue.current = input.value.trim();
            if (e.key === 'Enter' && searchValue.current)
              handleSearch(searchValue.current);
          }}
        />
        <button
          className="rounded-full bg-[#D6F379] px-4 py-2 font-medium text-black"
          onClick={() => {
            const input = document.querySelector(
              'input[type="text"]',
            ) as HTMLInputElement;
            searchValue.current = input.value.trim();
            if (searchValue.current) handleSearch(searchValue.current);
          }}
        >
          Search
        </button>
      </div>
      <div className="w-full">
        {artists && (
          <p className="pb-3 md:pb-5">
            Mostrando {artists.items.length} resultados de {artists.total}
          </p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {artists && artists.items.length > 0 ? (
            artists.items.map((artist, index) => (
              <ArtistCard
                key={index}
                id={artist.id}
                artistName={artist.name}
                followers={artist.followers.total}
                imageUrl={artist.images[0]?.url}
              />
            ))
          ) : (
            <p className="col-span-full my-10 text-center text-base text-[#D6F379]">
              Escribe algo en la barra de búsqueda para empezar.
            </p>
          )}
        </div>
      </div>
      {artists && (
        <CardsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default ArtistSearchSection;
