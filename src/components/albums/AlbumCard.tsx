import React, { useEffect, useState, useMemo } from 'react';
import ElementCard from '../common/ElementCard';
import useCheckUserSavedAlbums from '../../hooks/albums/useCheckUserSavedAlbums';
import useRemoveUserSavedAlbums from '../../hooks/albums/useRemoveUserSavedAlbums';
import useSaveAlbumsForCurrentUser from '../../hooks/albums/useSaveAlbumsForCurrentUser';

const AlbumCard: React.FC<{
  albumId: string;
  albumName: string;
  publishedDate: string;
  imageUrl: string;
}> = ({ albumId, albumName, publishedDate, imageUrl }) => {
  const token = JSON.parse(
    sessionStorage.getItem('spotifyAccess') || '{}',
  ).access_token;

  const albumIds = useMemo(() => [albumId], [albumId]);
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
    const albumIsRemoved = await removeAlbum(albumId);
    if (albumIsRemoved) setIsSaved(false);
  };

  const handleSave = async () => {
    const albumIsSaved = await saveAlbum(albumId);
    if (albumIsSaved) setIsSaved(true);
  };

  return (
    <ElementCard
      id={albumId}
      title={albumName}
      subtitle={`Publicado: ${publishedDate}`}
      imageUrl={imageUrl}
      isActionable
      onPrimaryAction={isSaved ? handleRemove : handleSave}
      primaryActionLabel={isSaved ? '- Remover album' : '+ Agregar album'}
    />
  );
};

export default AlbumCard;
