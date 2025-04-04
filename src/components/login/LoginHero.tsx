import React from 'react';
import { redirectToSpotifyLogin } from '../../services/spotifyAuthService';
import { ArrowRight } from 'akar-icons';

const LoginHero: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-8 lg:gap-10 px-4 md:px-0">
            <h2 className="text-4xl md:text-7xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
              Disfruta de la<br />
              <span className="text-[#D6F379]">mejor música</span>
            </h2>
            <p className="text-sm md:text-lg lg:text-sm xl:text-lg">
              Accede a tu cuenta para guardar tus<br />
              albumes favoritos.
            </p>
            <div className="flex justify-between gap-8 w-fit h-fit md:mt-20 lg:mt-10">
              <button
                onClick={redirectToSpotifyLogin}
                className="text-base md:text-lg font-semibold hover:underline cursor-pointer"
              >
                Log in con Spotify
              </button>
              <div className="w-6 h-6 md:w-7 md:h-7">
                <ArrowRight className="w-full h-full" />
              </div>
            </div>
          </div>
  );
}

export default LoginHero;
