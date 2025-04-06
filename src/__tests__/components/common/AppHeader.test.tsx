import { render, screen } from '@testing-library/react';
import AppHeader from '../../../components/common/AppHeader';

describe('AppHeader', () => {
  it('should render the header correctly', () => {
    render(<AppHeader />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
