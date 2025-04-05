import React from 'react';
import CardsPagination from '../common/CardsPagination';
import ArtistCard from '../artists/ArtistCard';
import useArtistSearch from '../../hooks/useArtistSearch';

const ArtistSearchSection: React.FC = () => {
  const totalPages = 20;
  const [currentPage, setCurrentPage] = React.useState(1);
  const { artists, searchArtists } = useArtistSearch();

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSearch = (query: string) => {
    searchArtists(query);
  };

  return (
    <div className="mx-auto mt-8 flex w-full flex-col items-center gap-12 md:mt-20 lg:mt-10 lg:gap-20">
      <div className="flex w-full items-center rounded-full bg-white px-4 py-2 shadow-md lg:w-3/4">
        <input
          type="text"
          placeholder="Search for an artist..."
          className="w-1/2 flex-grow bg-transparent pr-2.5 text-sm text-black placeholder-gray-500 outline-none"
          onKeyDown={(e) => {
            if (e.key === 'Enter')
              handleSearch((e.target as HTMLInputElement).value);
          }}
        />
        <button
          className="rounded-full bg-[#D6F379] px-4 py-2 font-medium text-black"
          onClick={() => {
            const input = document.querySelector(
              'input[type="text"]',
            ) as HTMLInputElement;
            handleSearch(input.value);
          }}
        >
          Search
        </button>
      </div>
      <div className="w-full">
        <p className="pb-3 md:pb-5">Mostrando {artists.length} resultados</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {artists.map((artist, index) => (
            <ArtistCard
              key={index}
              artistName={artist.artistName}
              followers={artist.followers}
              imageUrl={artist.imageUrl}
            />
          ))}
        </div>
      </div>
      <CardsPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ArtistSearchSection;
