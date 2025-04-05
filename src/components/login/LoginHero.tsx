import React from 'react';
import spotifyService from '../../services/spotifyService';
import { ArrowRight } from 'akar-icons';

const LoginHero: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-8 px-4 md:px-0 lg:gap-10">
      <h2 className="text-4xl leading-tight font-bold text-white md:text-7xl lg:text-4xl xl:text-5xl">
        Disfruta de la
        <br />
        <span className="text-[#D6F379]">mejor música</span>
      </h2>
      <p className="text-sm md:text-lg lg:text-sm xl:text-lg">
        Accede a tu cuenta para guardar tus
        <br />
        albumes favoritos.
      </p>
      <div className="flex h-fit w-fit justify-between gap-8 md:mt-20 lg:mt-10">
        <button
          onClick={spotifyService.redirectToLogin}
          className="cursor-pointer text-base font-semibold hover:underline md:text-lg"
        >
          Log in con Spotify
        </button>
        <div className="h-6 w-6 md:h-7 md:w-7">
          <ArrowRight className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default LoginHero;
