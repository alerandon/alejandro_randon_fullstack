import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import AlbumCard from '../../../components/albums/AlbumCard';
import useCheckUserSavedAlbums from '../../../hooks/albums/useCheckUserSavedAlbums';
import useRemoveUserSavedAlbums from '../../../hooks/albums/useRemoveUserSavedAlbums';
import useSaveAlbumsForCurrentUser from '../../../hooks/albums/useSaveAlbumsForCurrentUser';

jest.mock('../../../hooks/albums/useCheckUserSavedAlbums', () => jest.fn());
jest.mock('../../../hooks/albums/useRemoveUserSavedAlbums', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    removeAlbum: jest.fn(),
  })),
}));
jest.mock('../../../hooks/albums/useSaveAlbumsForCurrentUser', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    saveAlbum: jest.fn(),
  })),
}));

describe('AlbumCard', () => {
  const album = {
    id: '1',
    name: 'Test Album',
    publishedDate: '2023',
    imageUrl: 'test-url',
  };

  it('debería renderizar correctamente el álbum', () => {
    (useCheckUserSavedAlbums as jest.Mock).mockReturnValue({
      savedStatus: [false],
      loading: false,
    });
    render(<AlbumCard album={album} />);

    expect(screen.getByText(/test album/i)).toBeInTheDocument();
    expect(screen.getByText(/publicado: 2023/i)).toBeInTheDocument();
  });

  it('debería permitir guardar un álbum', async () => {
    (useCheckUserSavedAlbums as jest.Mock).mockReturnValue({
      savedStatus: [false],
      loading: false,
    });
    const saveAlbum = jest.fn().mockResolvedValue(true);
    (useSaveAlbumsForCurrentUser as jest.Mock).mockReturnValue({ saveAlbum });

    render(<AlbumCard album={album} />);

    const saveButton = screen.getByText(/\+ agregar album/i);
    await act(async () => {
      fireEvent.click(saveButton);
    });

    expect(saveAlbum).toHaveBeenCalledWith('1');
  });

  it('debería permitir remover un álbum', async () => {
    (useCheckUserSavedAlbums as jest.Mock).mockReturnValue({
      savedStatus: [true],
      loading: false,
    });
    const removeAlbum = jest.fn().mockResolvedValue(true);
    (useRemoveUserSavedAlbums as jest.Mock).mockReturnValue({ removeAlbum });

    render(<AlbumCard album={album} />);

    const removeButton = screen.getByText(/- remover album/i);
    await act(async () => {
      fireEvent.click(removeButton);
    });

    expect(removeAlbum).toHaveBeenCalledWith('1');
  });
});
