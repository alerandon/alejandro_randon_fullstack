import { render, screen } from '@testing-library/react';
import LoginMain from '../../../components/login/LoginMain';

describe('LoginMain', () => {
  it('should render the main login content correctly', () => {
    render(<LoginMain />);

    expect(screen.getByText(/Log in con Spotify/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /log in con spotify/i }),
    ).toBeInTheDocument();
  });
});
