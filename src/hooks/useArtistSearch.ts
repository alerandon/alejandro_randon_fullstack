import { useState } from 'react';
import spotifyService from '../services/spotifyService';

interface Artist {
  artistName: string;
  followers: number;
  imageUrl: string;
}

const useArtistSearch = () => {
  const [artists, setArtists] = useState<Artist[]>([]);

  const searchArtists = async (query: string) => {
    const token = sessionStorage.getItem('spotifyAccess');
    if (!token) {
      console.error('No access token found');
      return;
    }

    try {
      const parsedToken = JSON.parse(token);
      const fetchedArtists = await spotifyService.getArtists(
        query,
        parsedToken.access_token,
      );
      const formattedArtists = fetchedArtists.map((artist: any) => ({
        artistName: artist.name,
        followers: artist.followers.total,
        imageUrl: artist.images[0]?.url || '',
      }));
      setArtists(formattedArtists);
    } catch (error) {
      console.error('Error fetching artists:', error);
    }
  };

  return { artists, searchArtists };
};

export default useArtistSearch;
