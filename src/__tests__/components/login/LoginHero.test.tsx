import { render, screen } from '@testing-library/react';
import LoginHero from '../../../components/login/LoginHero';

describe('LoginHero', () => {
  it('should render the hero section correctly', () => {
    render(<LoginHero />);

    expect(screen.getByText(/disfruta de la/i)).toBeInTheDocument();
    expect(screen.getByText(/mejor música/i)).toBeInTheDocument();
    expect(
      screen.getByText(/accede a tu cuenta para guardar tus/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/albumes favoritos./i)).toBeInTheDocument();
  });
});
