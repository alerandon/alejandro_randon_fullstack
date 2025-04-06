import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import UserNavbar from '../../../components/users/UserNavbar';

describe('UserNavbar', () => {
  it('should render the navbar correctly', () => {
    render(
      <BrowserRouter>
        <UserNavbar />
      </BrowserRouter>,
    );

    expect(screen.getByText(/cerrar sesión/i)).toBeInTheDocument();
    expect(screen.getByText(/mis albumes/i)).toBeInTheDocument();
    expect(screen.getByText(/buscar/i)).toBeInTheDocument();
  });
});
