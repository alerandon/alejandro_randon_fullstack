import { render, screen } from '@testing-library/react';
import MyAlbumsListSection from '../../../../components/albums/sections/MyAlbumsListSection';
import useUserSavedAlbums from '../../../../hooks/albums/useUserSavedAlbums';

jest.mock('../../../../hooks/albums/useUserSavedAlbums', () => jest.fn());

describe('MyAlbumsListSection', () => {
  it('debería mostrar un mensaje de carga mientras se cargan los álbumes', () => {
    (useUserSavedAlbums as jest.Mock).mockReturnValue({
      loading: true,
      albums: null,
      error: null,
    });
    render(<MyAlbumsListSection />);

    expect(screen.getByText(/cargando álbumes.../i)).toBeInTheDocument();
  });

  it('debería mostrar un mensaje de error si ocurre un error al cargar los álbumes', () => {
    (useUserSavedAlbums as jest.Mock).mockReturnValue({
      loading: false,
      albums: null,
      error: 'Error de red',
    });
    render(<MyAlbumsListSection />);

    expect(
      screen.getByText(/error al cargar los álbumes: error de red/i),
    ).toBeInTheDocument();
  });

  it('debería renderizar los álbumes y la paginación correctamente', () => {
    (useUserSavedAlbums as jest.Mock).mockReturnValue({
      loading: false,
      albums: {
        items: [
          { id: '1', name: 'Album 1', publishedDate: '2023', imageUrl: 'url1' },
          { id: '2', name: 'Album 2', publishedDate: '2024', imageUrl: 'url2' },
        ],
        total: 2,
        limit: 2,
      },
      error: null,
    });
    render(<MyAlbumsListSection />);

    expect(screen.getByText(/album 1/i)).toBeInTheDocument();
    expect(screen.getByText(/album 2/i)).toBeInTheDocument();
  });
});
