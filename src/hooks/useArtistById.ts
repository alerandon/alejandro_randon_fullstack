import React from 'react';
import spotifyService from '../services/spotifyService';
import { SpotifyArtist } from '../types/artists';

const useArtistById = (artistId: string) => {
  const [artist, setArtist] = React.useState<SpotifyArtist>();
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchArtist = async () => {
      const token = sessionStorage.getItem('spotifyAccess');
      if (!token) {
        setError('No access token found');
        return;
      }

      try {
        const parsedToken = JSON.parse(token);
        const fetchedArtist = await spotifyService.getArtistById(
          artistId,
          parsedToken.access_token,
        );
        setArtist(fetchedArtist);
      } catch (err) {
        setError('Error fetching artist');
        console.error(err);
      }
    };

    if (artistId) {
      fetchArtist();
    }
  }, [artistId]);

  return { artist, error };
};

export default useArtistById;
