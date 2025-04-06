import { render, screen } from '@testing-library/react';
import ArtistDetailSection from '../../../../components/artists/sections/ArtistDetailSection';
import useArtistById from '../../../../hooks/artists/useArtistById';

jest.mock('../../../../hooks/artists/useArtistById', () => jest.fn());

describe('ArtistDetailSection', () => {
  it('should display a loading message while fetching artist details', () => {
    (useArtistById as jest.Mock).mockReturnValue({
      loading: true,
      artist: null,
      error: null,
    });
    render(<ArtistDetailSection artistId={'1'} />);

    expect(
      screen.getByText(/Cargando detalles del artista.../i),
    ).toBeInTheDocument();
  });

  it('should display an error message if fetching artist details fails', () => {
    (useArtistById as jest.Mock).mockReturnValue({
      loading: false,
      artist: null,
      error: 'Network error',
    });
    render(<ArtistDetailSection artistId={'2'} />);

    expect(
      screen.getByText(/error loading artist details: network error/i),
    ).toBeInTheDocument();
  });

  it('should render the artist details correctly', () => {
    (useArtistById as jest.Mock).mockReturnValue({
      loading: false,
      artist: {
        id: '3',
        name: 'Test Artist',
        imageUrl: 'test-url',
        followers: 1000,
        popularityScore: 80,
      },
      error: null,
    });
    render(<ArtistDetailSection artistId={'3'} />);

    expect(screen.getByText(/test artist/i)).toBeInTheDocument();
    expect(screen.getByText(/followers: 1000/i)).toBeInTheDocument();
    expect(
      screen.getByText(/popularity score \(0 to 100\): 80/i),
    ).toBeInTheDocument();
  });
});
