import React from 'react';

const MyAlbumsHeroSection: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <h2 className="w-full text-4xl leading-tight font-bold md:text-center md:text-5xl">
        Mis albumes
        <br />
        <span className="text-[#D6F379]"> guardados</span>
      </h2>
      <p className="text-sm leading-loose font-light md:w-5/7 md:text-center lg:w-4/8 xl:w-4/10">
        Disfruta de tu música a un solo click y descube que discos has guardado
        dentro de “mis álbumes”
      </p>
    </div>
  );
};

export default MyAlbumsHeroSection;
