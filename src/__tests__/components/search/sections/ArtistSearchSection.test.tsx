import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import ArtistSearchSection from '../../../../components/search/sections/ArtistSearchSection';
import useArtistSearch from '../../../../hooks/artists/useArtistSearch';

jest.mock('../../../../hooks/artists/useArtistSearch', () => jest.fn());

describe('ArtistSearchSection', () => {
  it('should display a loading message while searching for artists', () => {
    (useArtistSearch as jest.Mock).mockReturnValue({
      loading: true,
      artists: null,
      error: null,
    });
    render(
      <BrowserRouter>
        <ArtistSearchSection />
      </BrowserRouter>,
    );

    expect(screen.getByText(/cargando artistas.../i)).toBeInTheDocument();
  });

  it('should display an error message if the search fails', () => {
    (useArtistSearch as jest.Mock).mockReturnValue({
      loading: false,
      artists: null,
      error: 'Network error',
    });
    render(
      <BrowserRouter>
        <ArtistSearchSection />
      </BrowserRouter>,
    );

    expect(
      screen.getByText(/error al cargar los artistas: network error/i),
    ).toBeInTheDocument();
  });

  it('should render the artists correctly', () => {
    (useArtistSearch as jest.Mock).mockReturnValue({
      loading: false,
      artists: {
        items: [
          {
            id: '1',
            name: 'Artist 1',
            imageUrl: 'url1',
            followers: 1000,
            popularityScore: 80,
          },
          {
            id: '2',
            name: 'Artist 2',
            imageUrl: 'url2',
            followers: 2000,
            popularityScore: 90,
          },
        ],
        total: 2,
        limit: 2,
      },
      error: null,
      searchArtists: jest.fn(),
    });
    render(
      <BrowserRouter>
        <ArtistSearchSection />
      </BrowserRouter>,
    );

    expect(screen.getByText(/artist 1/i)).toBeInTheDocument();
    expect(screen.getByText(/artist 2/i)).toBeInTheDocument();
  });
});
