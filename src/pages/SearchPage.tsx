import React from 'react';
import ArtistSearchSection from '../components/search/sections/ArtistSearchSection';
import SearchHeroSection from '../components/search/sections/SearchHeroSection';

const SearchPage: React.FC = () => {
  const sessionToken = sessionStorage.getItem('spotifyAccess') ?? '';
  const ACCESS_TOKEN_OBJECT = sessionToken ? JSON.parse(sessionToken) : null;
  const isProcessed = React.useRef(false);

  React.useEffect(() => {
    if (isProcessed.current) return;

    const accessToken = ACCESS_TOKEN_OBJECT?.access_token;
    if (!accessToken) {
      console.error('Access token is missing. Please log in again.');
      return;
    }

    isProcessed.current = true;
  }, [ACCESS_TOKEN_OBJECT]);

  return (
    <>
      <SearchHeroSection />
      <ArtistSearchSection />
    </>
  );
};

export default SearchPage;
