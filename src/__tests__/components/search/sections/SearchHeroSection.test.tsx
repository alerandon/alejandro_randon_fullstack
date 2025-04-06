import { render, screen } from '@testing-library/react';
import SearchHeroSection from '../../../../components/search/sections/SearchHeroSection';

describe('SearchHeroSection', () => {
  it('should render the hero section correctly', () => {
    render(<SearchHeroSection />);

    expect(
      screen.getByText(/search for your favorite artists/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/discover new music and explore artists/i),
    ).toBeInTheDocument();
  });
});
