import { useEffect, useState } from 'react';
import spotifyService from '../services/spotifyService';

const useCheckUserSavedAlbums = (albumIds: string[], token: string) => {
  const [savedStatus, setSavedStatus] = useState<boolean[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkSavedAlbums = async () => {
      setLoading(true);
      setError(null);

      try {
        const status = await spotifyService.checkUserSavedAlbums(
          albumIds,
          token,
        );
        setSavedStatus(status);
      } catch (err) {
        setError('Error al verificar los álbumes guardados.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (albumIds.length > 0 && token) {
      checkSavedAlbums();
    }
  }, [albumIds, token]);

  return { savedStatus, loading, error };
};

export default useCheckUserSavedAlbums;
