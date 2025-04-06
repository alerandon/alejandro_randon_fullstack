import { render, screen } from '@testing-library/react';
import AppMain from '../../../components/common/AppMain';

describe('AppMain', () => {
  it('should render the main content area correctly', () => {
    render(<AppMain>Test Content</AppMain>);

    expect(screen.getByText(/test content/i)).toBeInTheDocument();
  });
});
