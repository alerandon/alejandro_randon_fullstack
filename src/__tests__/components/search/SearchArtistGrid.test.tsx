import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import SearchArtistGrid from '../../../components/search/SearchArtistGrid';
import { SpotifyArtistsPagination } from '../../../types/artists';

describe('SearchArtistGrid', () => {
  it('should render artists correctly', () => {
    const artists = {
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
    } as SpotifyArtistsPagination;
    const searchValue = { current: 'Test Artist' };

    render(
      <BrowserRouter>
        <SearchArtistGrid artists={artists} searchValue={searchValue} />
      </BrowserRouter>,
    );

    expect(screen.getByText(/artist 1/i)).toBeInTheDocument();
    expect(screen.getByText(/artist 2/i)).toBeInTheDocument();
    expect(
      screen.getByText(/mostrando 2 resultados de 2/i),
    ).toBeInTheDocument();
  });

  it('should display the empty message when no artists are provided', () => {
    const searchValue = { current: 'test' };
    const artists = {} as SpotifyArtistsPagination;

    render(
      <BrowserRouter>
        <SearchArtistGrid artists={artists} searchValue={searchValue} />
      </BrowserRouter>,
    );

    expect(
      screen.getByText(/no se encontraron resultados para "test"/i),
    ).toBeInTheDocument();
  });
});
