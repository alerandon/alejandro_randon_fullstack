import { useState } from 'react';
import spotifyService from '../services/spotifyService';
import { SpotifyArtistsResponse } from '../types/artists';

const useArtistSearch = () => {
  const [artists, setArtists] = useState<SpotifyArtistsResponse>();

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
      const formattedArtists = fetchedArtists.items.map((artist: any) => {
        const formattedName = artist.name.replace(/ /g, '+');
        const finalImageUrl =
          artist.images[0]?.url ||
          `https://placehold.co/500/gray/white?text=${formattedName}`;

        return {
          artistName: artist.name,
          followers: artist.followers.total,
          imageUrl: finalImageUrl,
        };
      });
      const formattedResponse = {
        ...fetchedArtists,
        items: formattedArtists,
      };

      setArtists(formattedResponse);
    } catch (error) {
      console.error('Error fetching artists:', error);
    }
  };

  return { artists, searchArtists };
};

export default useArtistSearch;
