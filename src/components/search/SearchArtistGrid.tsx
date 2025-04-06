import React from 'react';
import ArtistCard from '../artists/ArtistCard';

interface SearchArtistGridProps {
  artists: any;
  searchValue: React.RefObject<string>;
}

const SearchArtistGrid: React.FC<SearchArtistGridProps> = ({
  artists,
  searchValue,
}) => {
  const hasItems = artists?.items?.length > 0;
  const resultText = hasItems
    ? `Mostrando ${artists.items.length} resultados de ${artists.total}`
    : `No se encontraron resultados para "${searchValue.current}"`;

  return (
    <div className="w-full">
      {artists && <p className="pb-3 md:pb-5">{resultText}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {hasItems ? (
          artists.items.map((artist, index) => (
            <ArtistCard
              key={index}
              artistId={artist.id}
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
  );
};

export default SearchArtistGrid;
