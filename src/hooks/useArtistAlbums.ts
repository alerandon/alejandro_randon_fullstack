import React from 'react';
import spotifyService from '../services/spotifyService';
import { SpotifyArtistAlbums } from '../types/albums';

interface Album {
  id: string;
  name: string;
  release_date: string;
  images: { url: string }[];
}

const useArtistAlbums = (artistId: string, token: string, page: number = 1) => {
  const [albums, setAlbums] = React.useState<SpotifyArtistAlbums>();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchedAlbums = await spotifyService.getArtistAlbums(
          artistId,
          token,
          page,
        );
        setAlbums(fetchedAlbums);
      } catch (err) {
        setError('Error al obtener los álbumes del artista.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (artistId && token) {
      fetchAlbums();
    }
  }, [artistId, token, page]);

  return { albums, loading, error };
};

export default useArtistAlbums;
