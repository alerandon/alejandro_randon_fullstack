import React from "react";

const SearcherHeroSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <h2 className="w-full md:text-center text-4xl md:text-5xl font-bold leading-tight">Busca tus<br /><span className="text-[#D6F379]"> artistas</span></h2>
      <p className="text-base md:text-center font-normal leading-relaxed md:w-4/5 lg:w-3/5">Encuentra tus artistas favoritos gracias a nuestro buscador y guarda tus álbumes favoritos</p>
    </div>
  );
}

export default SearcherHeroSection;
