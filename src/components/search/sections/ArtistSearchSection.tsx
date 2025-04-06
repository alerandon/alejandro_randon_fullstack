import React from 'react';
import CardsPagination from '../../common/CardsPagination';
import useArtistSearch from '../../../hooks/artists/useArtistSearch';
import SearchInput from '../SearchInput';
import SearchArtistGrid from '../SearchArtistGrid';

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

  console.log('Artists:', artists);
  return (
    <div className="mx-auto mt-8 flex w-full flex-col items-center gap-12 md:mt-20 lg:mt-10 lg:gap-20">
      <SearchInput searchValue={searchValue} onSearch={handleSearch} />
      <SearchArtistGrid artists={artists!} searchValue={searchValue} />
      {artists && artists.items.length > 0 && (
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
