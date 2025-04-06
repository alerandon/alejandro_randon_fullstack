import { render, screen } from '@testing-library/react';
import LoginNavbar from '../../../components/login/LoginNavbar';

describe('LoginNavbar', () => {
  it('should render the navbar correctly', () => {
    render(<LoginNavbar />);

    expect(screen.getByText(/music search/i)).toBeInTheDocument();
  });
});
