import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import UserLogout from '../../../components/user/UserLogout';

describe('UserLogout', () => {
  it('should render the logout button correctly', () => {
    render(
      <BrowserRouter>
        <UserLogout />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('button', { name: /cerrar sesión/i }),
    ).toBeInTheDocument();
  });

  it('should call the logout function when clicked', () => {
    const mockLogout = jest.fn();
    Object.defineProperty(window, 'localStorage', {
      value: {
        removeItem: mockLogout,
      },
      writable: true,
    });

    render(
      <BrowserRouter>
        <UserLogout />
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: /cerrar sesión/i }));
    expect(mockLogout).toHaveBeenCalled();
  });
});
