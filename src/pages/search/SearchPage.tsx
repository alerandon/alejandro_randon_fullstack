import React from 'react';
import ArtistSearchSection from '../../components/search/sections/ArtistSearchSection';
import SearchHeroSection from '../../components/search/sections/SearchHeroSection';
import useSpotifyAuthGuard from '../../hooks/auth/useSpotifyAuthGuard';

const SearchPage: React.FC = () => {
  useSpotifyAuthGuard();

  return (
    <>
      <SearchHeroSection />
      <ArtistSearchSection />
    </>
  );
};

export default SearchPage;
