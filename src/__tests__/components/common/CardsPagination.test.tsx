import { render, screen, fireEvent } from '@testing-library/react';
import CardsPagination from '../../../components/common/CardsPagination';

describe('CardsPagination', () => {
  it('should render pagination buttons correctly', () => {
    render(
      <CardsPagination
        currentPage={2}
        totalPages={5}
        onPageChange={jest.fn()}
      />,
    );

    expect(screen.getByText(/2/i)).toBeInTheDocument();
    expect(screen.getByText(/5/i)).toBeInTheDocument();
  });

  it('should call onPageChange when a button is clicked', () => {
    const onPageChange = jest.fn();
    render(
      <CardsPagination
        currentPage={2}
        totalPages={5}
        onPageChange={onPageChange}
      />,
    );

    fireEvent.click(screen.getByText(/3/i));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });
});
