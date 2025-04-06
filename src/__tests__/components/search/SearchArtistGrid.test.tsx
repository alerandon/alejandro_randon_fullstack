import { render, screen } from '@testing-library/react';
import SearchArtistGrid from '../../../components/search/SearchArtistGrid';

describe('SearchArtistGrid', () => {
  it('should render artists correctly', () => {
    const artists = [
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
    ];

    render(
      <SearchArtistGrid artists={artists} emptyMessage="No artists found." />,
    );

    expect(screen.getByText(/artist 1/i)).toBeInTheDocument();
    expect(screen.getByText(/artist 2/i)).toBeInTheDocument();
  });

  it('should display the empty message when no artists are provided', () => {
    render(<SearchArtistGrid artists={[]} emptyMessage="No artists found." />);

    expect(screen.getByText(/no artists found/i)).toBeInTheDocument();
  });
});
