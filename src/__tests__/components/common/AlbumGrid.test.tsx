import { render, screen } from '@testing-library/react';
import AlbumGrid from '../../../components/common/AlbumGrid';

describe('AlbumGrid', () => {
  it('should render albums correctly', () => {
    const albums = [
      { id: '1', name: 'Album 1', publishedDate: '2023', imageUrl: 'url1' },
      { id: '2', name: 'Album 2', publishedDate: '2024', imageUrl: 'url2' },
    ];

    render(<AlbumGrid albums={albums} emptyMessage="No albums found." />);

    expect(screen.getByText(/album 1/i)).toBeInTheDocument();
    expect(screen.getByText(/album 2/i)).toBeInTheDocument();
  });

  it('should display the empty message when no albums are provided', () => {
    render(<AlbumGrid albums={[]} emptyMessage="No albums found." />);

    expect(screen.getByText(/no albums found/i)).toBeInTheDocument();
  });
});
