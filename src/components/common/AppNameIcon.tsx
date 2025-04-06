import React from 'react';

const AppNameIcon: React.FC = () => {
  return (
    <>
      <img
        src="/src/assets/isotypes/music-search-isotype.png"
        alt="my music search"
        className="h-10 w-10 sm:hidden md:h-10 md:w-10"
      />
      <span className="hidden text-sm sm:inline md:text-base">
        my music searcher
      </span>
    </>
  );
};

export default AppNameIcon;
