import React from 'react';
import { ArrowRight } from 'akar-icons';
import DiagonalArrow from '../../assets/icons/DiagonalArrow.svg?react';
import { redirectToSpotifyLogin } from '../../services/spotifyAuthService';
import LoginHero from './LoginHero';

const LoginMain: React.FC = () => {
  return (
    <main className="flex flex-col lg:flex-row items-center md:items-start justify-center lg:justify-between xl:w-max h-full max-w-xl lg:max-w-10/12 xl:max-w-[1440px] pt-16 md:pt-28 lg:pt-20 gap-12 md:gap-20 xl:gap-32 mx-auto">
      <div
        className="
        w-[222px] h-[222px]
        md:w-[400px] md:h-[400px]
        lg:w-[430px] lg:h-[430px]
        xl:w-[480px] xl:h-[480px]
      "
      >
        <DiagonalArrow />
      </div>
      <LoginHero />
    </main>
  );
};

export default LoginMain;
