import React, { useEffect, useState, useMemo } from 'react';
import useCheckUserSavedAlbums from '../../hooks/useCheckUserSavedAlbums';
import useRemoveUserSavedAlbums from '../../hooks/useRemoveUserSavedAlbums';
import useSaveAlbumsForCurrentUser from '../../hooks/useSaveAlbumsForCurrentUser';
import spotifyService from '../../services/spotifyService';

type AlbumCardProps = {
  albumId: string;
  albumName: string;
  publishedDate: string;
  imageUrl: string;
};

const AlbumCard: React.FC<AlbumCardProps> = ({
  albumId,
  albumName,
  publishedDate,
  imageUrl,
}) => {
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

  const formattedName = albumName.replace(/ /g, '+');
  const finalImageUrl =
    imageUrl || `https://placehold.co/500/gray/white?text=${formattedName}`;

  return (
    <div className="flex flex-col items-center rounded-3xl bg-transparent p-7 text-white hover:bg-[#D6F379] hover:text-gray-900 md:p-5">
      <img
        src={finalImageUrl}
        alt={albumName}
        className="mb-4 h-44 max-h-44 w-44 max-w-44 rounded-xl object-cover"
      />
      <div className="self-start pt-2">
        <h3 className="text-3xl font-semibold lg:text-2xl">{albumName}</h3>
        <p className="mt-4 text-sm font-semibold lg:text-xs">
          Publicado: {publishedDate}
        </p>
      </div>
      {isSaved ? (
        <button
          onClick={handleRemove}
          className="xl: mt-5 w-5/7 cursor-pointer self-start rounded-full bg-[#E3513D] px-4 py-2 text-sm font-medium text-nowrap text-white md:w-6/7 lg:w-11/12 lg:text-xs xl:w-9/12"
        >
          - Remover album
        </button>
      ) : (
        <button
          onClick={handleSave}
          className="xl: mt-5 w-5/7 cursor-pointer self-start rounded-full bg-[#4CAF50] px-4 py-2 text-sm font-medium text-nowrap text-white md:w-6/7 lg:w-11/12 lg:text-xs xl:w-9/12"
        >
          + Agregar album
        </button>
      )}
    </div>
  );
};

export default AlbumCard;
