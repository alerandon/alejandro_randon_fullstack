import { useState } from 'react';
import spotifyService from '../../services/spotifyService';

const useSaveAlbumsForCurrentUser = (token: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const saveAlbum = async (albumId: string) => {
    setLoading(true);
    setError(null);
    let success = false;

    try {
      success = await spotifyService.saveAlbumsForCurrentUser([albumId], token);
    } catch (err) {
      setError('Error al guardar el álbum.');
      console.error(err);
    } finally {
      setLoading(false);
      return success;
    }
  };

  return { saveAlbum, loading, error };
};

export default useSaveAlbumsForCurrentUser;
