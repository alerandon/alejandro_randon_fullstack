import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from '../../../components/search/SearchInput';

describe('SearchInput', () => {
  it('should render the input field correctly', () => {
    render(<SearchInput searchValue={{ current: '' }} onSearch={jest.fn()} />);

    expect(
      screen.getByPlaceholderText(/search for an artist.../i),
    ).toBeInTheDocument();
  });
});
