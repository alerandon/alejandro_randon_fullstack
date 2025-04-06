import React from 'react';
import spotifyService from '../../services/spotifyService';
import { SpotifyArtistsPagination } from '../../types/artists';

const useArtistSearch = () => {
  const [artists, setArtists] = React.useState<SpotifyArtistsPagination>();

  const searchArtists = async (query: string, page: number = 1) => {
    const token = sessionStorage.getItem('spotifyAccess');
    if (!token) {
      console.error('No access token found');
      return;
    }

    try {
      const parsedToken = JSON.parse(token);
      const fetchedArtists = await spotifyService.getArtists(
        query,
        page,
        parsedToken.access_token,
      );

      setArtists(fetchedArtists);
    } catch (error) {
      console.error('Error fetching artists:', error);
    }
  };

  return { artists, searchArtists };
};

export default useArtistSearch;
