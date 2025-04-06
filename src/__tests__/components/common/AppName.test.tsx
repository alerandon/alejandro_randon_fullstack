import { render, screen } from '@testing-library/react';
import AppName from '../../../components/common/AppName';

describe('AppName', () => {
  it('should render the app name correctly', () => {
    render(<AppName />);

    expect(screen.getByText(/music search/i)).toBeInTheDocument();
  });
});
