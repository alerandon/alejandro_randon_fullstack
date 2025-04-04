import React from 'react';

const SearcherHeroSection: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <h2 className="w-full text-4xl leading-tight font-bold md:text-center md:text-5xl">
        Busca tus
        <br />
        <span className="text-[#D6F379]"> artistas</span>
      </h2>
      <p className="text-base leading-relaxed font-normal md:w-4/5 md:text-center lg:w-3/5">
        Encuentra tus artistas favoritos gracias a nuestro buscador y guarda tus
        álbumes favoritos
      </p>
    </div>
  );
};

export default SearcherHeroSection;
