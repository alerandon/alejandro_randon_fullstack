import React from "react";

const ArtistCard: React.FC<{ artistName: string; followers: number; imageUrl: string }> = ({ artistName, followers, imageUrl }) => {
  return (
    <div className="bg-transparent hover:bg-[#D6F379] text-white hover:text-gray-900 p-7 rounded-3xl flex flex-col items-center shadow-lg">
      <img src={imageUrl} alt={artistName} className="object-cover rounded-xl mb-4" />
      <div className="self-start pt-2">
        <h3 className="text-3xl font-semibold">{artistName}</h3>
        <p className="text-sm font-semibold pt-4">Followers: {followers.toLocaleString()}</p>
      </div>
    </div>
  );
};

const Pagination: React.FC<{ currentPage: number; totalPages: number; onPageChange: (page: number) => void }> = ({ currentPage, totalPages, onPageChange }) => {
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
      visiblePages.unshift("...");
    }

    if (end < totalPages) {
      visiblePages.push("...");
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
          onClick={() => typeof page === "number" && onPageChange(page)}
          className={`px-2 ${page === currentPage ? 'text-[#D6F379] font-bold' : ''}`}
          disabled={typeof page !== "number"}
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
    { artistName: "Artist 1", followers: 123456, imageUrl: "https://placehold.co/500" },
    { artistName: "Artist 2", followers: 654321, imageUrl: "https://placehold.co/500" },
    { artistName: "Artist 3", followers: 987654, imageUrl: "https://placehold.co/500" },
    { artistName: "Artist 4", followers: 456789, imageUrl: "https://placehold.co/500" },
  ];

  const totalPages = 20;
  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex flex-col items-center w-full mx-auto gap-12">
      <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 w-full">
        <input
          type="text"
          placeholder="Search for an artist..."
          className="flex-grow w-1/2 pr-2.5 bg-transparent outline-none text-black text-sm placeholder-gray-500"
        />
        <button className="bg-[#D6F379] text-black font-medium py-2 px-4 rounded-full">Search</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        <p>Mostrando 4 resultados de 30</p>
        {artists.map((artist, index) => (
          <ArtistCard
            key={index}
            artistName={artist.artistName}
            followers={artist.followers}
            imageUrl={artist.imageUrl}
          />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default ArtistSearcherSection;
