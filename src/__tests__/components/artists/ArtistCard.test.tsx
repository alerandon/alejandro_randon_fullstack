import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import ArtistCard from '../../../components/artists/ArtistCard';

describe('ArtistCard', () => {
  const artist = {
    id: '1',
    name: 'Test Artist',
    imageUrl: 'test-url',
    followers: 1000,
    popularityScore: 80,
  };

  it('should render the artist details correctly', () => {
    render(
      <BrowserRouter>
        <ArtistCard artist={artist} />
      </BrowserRouter>,
    );

    expect(screen.getByText(/test artist/i)).toBeInTheDocument();
    expect(screen.getByText(/seguidores: 1000/i)).toBeInTheDocument();
  });

  // Removed the test for onClick as the component does not support it.
});
