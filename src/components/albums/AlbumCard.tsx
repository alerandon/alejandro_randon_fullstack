import React, { useEffect, useState, useMemo } from 'react';
import ElementCard from '../common/ElementCard';
import useCheckUserSavedAlbums from '../../hooks/albums/useCheckUserSavedAlbums';
import useRemoveUserSavedAlbums from '../../hooks/albums/useRemoveUserSavedAlbums';
import useSaveAlbumsForCurrentUser from '../../hooks/albums/useSaveAlbumsForCurrentUser';
import { SpotifyAlbum } from '../../types/albums';

const AlbumCard: React.FC<{
  album: SpotifyAlbum;
}> = ({ album }) => {
  const token = JSON.parse(
    sessionStorage.getItem('spotifyAccess') || '{}',
  ).access_token;

  const albumIds = useMemo(() => [album.id], [album.id]);
  const { savedStatus, loading } = useCheckUserSavedAlbums(albumIds, token);
  const { removeAlbum } = useRemoveUserSavedAlbums(token);
  const { saveAlbum } = useSaveAlbumsForCurrentUser(token);

  const [isSaved, setIsSaved] = useState<boolean>(false);

  useEffect(() => {
    if (!loading && savedStatus.length > 0) {
      setIsSaved(savedStatus[0]);
    }
  }, [savedStatus, loading]);

  const handleRemove = async () => {
    const albumIsRemoved = await removeAlbum(album.id);
    if (albumIsRemoved) setIsSaved(false);
  };

  const handleSave = async () => {
    const albumIsSaved = await saveAlbum(album.id);
    if (albumIsSaved) setIsSaved(true);
  };

  return (
    <ElementCard
      title={album.name}
      subtitle={`Publicado: ${album.publishedDate}`}
      imageUrl={album.imageUrl}
      isActionable
      onPrimaryAction={isSaved ? handleRemove : handleSave}
      primaryActionLabel={isSaved ? '- Remover album' : '+ Agregar album'}
    />
  );
};

export default AlbumCard;
