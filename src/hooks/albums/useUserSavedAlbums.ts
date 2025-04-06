import { useState, useEffect } from 'react';
import spotifyService from '../../services/spotifyService';
import { SpotifyAlbumsPagination } from '../../types/albums';

const useUserSavedAlbums = (token: string, page: number = 1) => {
  const [albums, setAlbums] = useState<SpotifyAlbumsPagination>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSavedAlbums = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchedAlbums = await spotifyService.getUserSavedAlbums(
          token,
          page,
        );
        setAlbums(fetchedAlbums);
      } catch (err: any) {
        console.error('Error fetching user saved albums:', err);
        setError(err.message || 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchSavedAlbums();
    }
  }, [token, page]);

  return { albums, loading, error };
};

export default useUserSavedAlbums;
