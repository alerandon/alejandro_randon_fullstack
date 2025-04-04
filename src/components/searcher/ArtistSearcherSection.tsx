import React from 'react';

const ArtistCard: React.FC<{
  artistName: string;
  followers: number;
  imageUrl: string;
}> = ({ artistName, followers, imageUrl }) => {
  return (
    <div className="flex flex-col items-center rounded-3xl bg-transparent p-7 text-white shadow-lg hover:bg-[#D6F379] hover:text-gray-900 md:p-5">
      <img
        src={imageUrl}
        alt={artistName}
        className="mb-4 rounded-xl object-cover"
      />
      <div className="self-start pt-2">
        <h3 className="text-3xl font-semibold lg:text-2xl">{artistName}</h3>
        <p className="pt-4 text-sm font-semibold lg:text-xs">
          Followers: {followers.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const maxVisiblePages = 5;

  const getVisiblePages = () => {
    if (totalPages <= maxVisiblePages) {
      return pages;
    }

    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, currentPage + 2);

    const visiblePages = pages.slice(start - 1, end);

    if (start > 1) {
      visiblePages.unshift('...');
    }

    if (end < totalPages) {
      visiblePages.push('...');
    }

    return visiblePages;
  };

  return (
    <div className="flex items-center justify-center gap-4 text-white">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="disabled:opacity-50"
      >
        &lt;
      </button>
      {getVisiblePages().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          className={`px-2 ${page === currentPage ? 'font-bold text-[#D6F379]' : ''}`}
          disabled={typeof page !== 'number'}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
};

const ArtistSearcherSection: React.FC = () => {
  const artists = [
    {
      artistName: 'Artist 1',
      followers: 123456,
      imageUrl: 'https://placehold.co/500',
    },
    {
      artistName: 'Artist 2',
      followers: 654321,
      imageUrl: 'https://placehold.co/500',
    },
    {
      artistName: 'Artist 3',
      followers: 987654,
      imageUrl: 'https://placehold.co/500',
    },
    {
      artistName: 'Artist 4',
      followers: 456789,
      imageUrl: 'https://placehold.co/500',
    },
  ];

  const totalPages = 20;
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="mx-auto flex w-full flex-col items-center gap-12 lg:gap-20">
      <div className="flex w-full items-center rounded-full bg-white px-4 py-2 shadow-md lg:w-3/4">
        <input
          type="text"
          placeholder="Search for an artist..."
          className="w-1/2 flex-grow bg-transparent pr-2.5 text-sm text-black placeholder-gray-500 outline-none"
        />
        <button className="rounded-full bg-[#D6F379] px-4 py-2 font-medium text-black">
          Search
        </button>
      </div>
      <div className="w-full">
        <p className="pb-3 md:pb-5">Mostrando 4 resultados de 30</p>
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ArtistSearcherSection;
