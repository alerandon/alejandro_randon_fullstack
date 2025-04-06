import { render, screen, fireEvent } from '@testing-library/react';
import SearchInput from '../../../components/search/SearchInput';

describe('SearchInput', () => {
  it('should render the input field correctly', () => {
    render(
      <SearchInput placeholder="Search artists..." onSearch={jest.fn()} />,
    );

    expect(
      screen.getByPlaceholderText(/search artists.../i),
    ).toBeInTheDocument();
  });

  it('should call onSearch when the input value changes', () => {
    const onSearch = jest.fn();
    render(<SearchInput placeholder="Search artists..." onSearch={onSearch} />);

    const input = screen.getByPlaceholderText(/search artists.../i);
    fireEvent.change(input, { target: { value: 'New Artist' } });

    expect(onSearch).toHaveBeenCalledWith('New Artist');
  });
});
