import React from 'react';
import { ArrowRight } from 'akar-icons';
import DiagonalArrow from '../../assets/icons/DiagonalArrow.svg?react';
import { redirectToSpotifyLogin } from '../../services/spotifyAuthService';
import LoginHero from './LoginHero';

const LoginMain: React.FC = () => {
  return (
    <main className="mx-auto flex h-full max-w-xl flex-col items-center justify-center gap-12 pt-16 md:items-start md:gap-20 md:pt-28 lg:max-w-10/12 lg:flex-row lg:justify-between lg:pt-20 xl:w-max xl:max-w-[1440px] xl:gap-32">
      <div className="h-[222px] w-[222px] md:h-[400px] md:w-[400px] lg:h-[430px] lg:w-[430px] xl:h-[480px] xl:w-[480px]">
        <DiagonalArrow />
      </div>
      <LoginHero />
    </main>
  );
};

export default LoginMain;
