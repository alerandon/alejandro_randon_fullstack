import { render, screen } from '@testing-library/react';
import ArtistDetailSection from '../../../../components/artists/sections/ArtistDetailSection';
import useArtistById from '../../../../hooks/artists/useArtistById';

jest.mock('../../../../hooks/artists/useArtistById', () => jest.fn());

describe('ArtistDetailSection', () => {
  it('should render the artist details correctly', () => {
    const artist = {
      id: '3',
      name: 'Test Artist',
      imageUrl: 'test-url',
      followers: 1000,
      popularityScore: 80,
    };

    (useArtistById as jest.Mock).mockReturnValue({
      loading: false,
      artist,
      error: null,
    });

    render(<ArtistDetailSection artist={artist} />);

    expect(screen.getByText(/test artist/i)).toBeInTheDocument();
    expect(screen.getByText(/followers: 1000/i)).toBeInTheDocument();
    expect(
      screen.getByText(/popularity score \(0 to 100\): 80/i),
    ).toBeInTheDocument();
  });
});
