import { render, screen } from '@testing-library/react';
import UserLayout from '../../../components/users/UserLayout';
import { BrowserRouter } from 'react-router';

describe('UserLayout', () => {
  it('should render the layout correctly', () => {
    render(
      <BrowserRouter>
        <UserLayout>
          <div>Test Content</div>
        </UserLayout>
      </BrowserRouter>,
    );

    expect(screen.getByText(/test content/i)).toBeInTheDocument();
  });
});
