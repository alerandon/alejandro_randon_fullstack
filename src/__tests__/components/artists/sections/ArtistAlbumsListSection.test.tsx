import { render, screen } from '@testing-library/react';
import ArtistAlbumsListSection from '../../../../components/artists/sections/ArtistAlbumsListSection';
import useArtistAlbums from '../../../../hooks/albums/useArtistAlbums';

jest.mock('../../../../hooks/albums/useArtistAlbums', () => jest.fn());

describe('ArtistAlbumsListSection', () => {
  it('should display a loading message while fetching albums', () => {
    const artist = {
      id: '1',
      name: 'Test Artist',
      imageUrl: 'url',
      followers: 1000,
      popularityScore: 80,
    };
    (useArtistAlbums as jest.Mock).mockReturnValue({
      loading: true,
      albums: null,
      error: null,
    });
    render(<ArtistAlbumsListSection artist={artist} />);

    expect(screen.getByText(/cargando álbumes.../i)).toBeInTheDocument();
  });

  it('should display an error message if fetching albums fails', () => {
    const artist = {
      id: '1',
      name: 'Test Artist',
      imageUrl: 'url',
      followers: 1000,
      popularityScore: 80,
    };
    (useArtistAlbums as jest.Mock).mockReturnValue({
      loading: false,
      albums: null,
      error: 'Network error',
    });
    render(<ArtistAlbumsListSection artist={artist} />);

    expect(
      screen.getByText((content, element) => {
        const hasText = (node: Element) =>
          node.textContent === 'Error al cargar los álbumes: Network error';
        const nodeHasText = hasText(element!);
        const childrenDontHaveText = Array.from(element!.children).every(
          (child) => !hasText(child),
        );
        return nodeHasText && childrenDontHaveText;
      }),
    ).toBeInTheDocument();
  });

  it('should render the albums correctly', () => {
    const artist = {
      id: '1',
      name: 'Test Artist',
      imageUrl: 'url',
      followers: 1000,
      popularityScore: 80,
    };
    (useArtistAlbums as jest.Mock).mockReturnValue({
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
    render(<ArtistAlbumsListSection artist={artist} />);

    expect(screen.getByText(/album 1/i)).toBeInTheDocument();
    expect(screen.getByText(/album 2/i)).toBeInTheDocument();
  });
});
