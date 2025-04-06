import { useState } from 'react';
import spotifyService from '../../services/spotifyService';

const useRemoveUserSavedAlbums = (token: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const removeAlbum = async (albumId: string) => {
    setLoading(true);
    setError(null);
    let success = false;

    try {
      success = await spotifyService.removeUserSavedAlbums([albumId], token);
      console.log(`Álbum con ID ${albumId} eliminado exitosamente.`);
    } catch (err) {
      setError('Error al eliminar el álbum guardado.');
      console.error(err);
    } finally {
      setLoading(false);
      return success;
    }
  };

  return { removeAlbum, loading, error };
};

export default useRemoveUserSavedAlbums;
