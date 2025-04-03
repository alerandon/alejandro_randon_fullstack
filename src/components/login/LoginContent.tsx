import { FC } from 'react';

const LoginContent: FC = () => {
  return (
    <div className="flex flex-col justify-center gap-8 px-4 md:px-0">
      <h2 className="text-4xl md:text-7xl font-bold text-white leading-snug">
        Disfruta de la
        <br />
        <span className="text-[#D6F379]">mejor música</span>
      </h2>
      <p className="text-sm md:text-lg">
        Accede a tu cuenta para guardar tus
        <br />
        albumes favoritos.
      </p>
      <p className="text-base md:text-lg font-semibold md:mt-20">
        Log in con Spotify
      </p>
    </div>
  );
};

export default LoginContent;
