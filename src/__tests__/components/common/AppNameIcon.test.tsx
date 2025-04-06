import { render, screen } from '@testing-library/react';
import AppNameIcon from '../../../components/common/AppNameIcon';

describe('AppNameIcon', () => {
  it('should render the app name icon correctly', () => {
    render(<AppNameIcon />);

    expect(
      screen.getByRole('img', { name: /my music search/i }),
    ).toBeInTheDocument();
  });
});
