import React from 'react';
import ArtistSearcherSection from '../components/searcher/ArtistSearcherSection';
import SearcherHeroSection from '../components/searcher/SearcherHeroSection';

const SearchPage: React.FC = () => {
  const SPOTIFY_API_URL = 'https://api.spotify.com/v1';
  const sessionToken = sessionStorage.getItem('spotifyAccessToken') ?? '';
  console.log('Session Token:', sessionToken);
  const ACCESS_TOKEN_OBJECT = sessionToken ? JSON.parse(sessionToken) : null;
  console.log('Access Token Object:', ACCESS_TOKEN_OBJECT);
  const isProcessed = React.useRef(false);

  React.useEffect(() => {
    if (isProcessed.current) return;

    const { access_token } = ACCESS_TOKEN_OBJECT;
    if (!access_token) {
      console.error('Access token is missing. Please log in again.');
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch(`${SPOTIFY_API_URL}/me`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };
    // fetchProfile();

    isProcessed.current = true;
  }, [ACCESS_TOKEN_OBJECT]);

  return (
    <>
      <SearcherHeroSection />
      <ArtistSearcherSection />
    </>
  );
};

export default SearchPage;
