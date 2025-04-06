import { render, screen, fireEvent } from '@testing-library/react';
import ElementCard from '../../../components/common/ElementCard';

describe('ElementCard', () => {
  it('should render the card details correctly', () => {
    render(
      <ElementCard
        title="Test Title"
        subtitle="Test Subtitle"
        imageUrl="test-url"
        isActionable
        primaryActionLabel="Click Me"
        onPrimaryAction={jest.fn()}
      />,
    );

    expect(screen.getByText(/test title/i)).toBeInTheDocument();
    expect(screen.getByText(/test subtitle/i)).toBeInTheDocument();
  });

  it('should call onPrimaryAction when the button is clicked', () => {
    const onPrimaryAction = jest.fn();
    render(
      <ElementCard
        title="Test Title"
        subtitle="Test Subtitle"
        imageUrl="test-url"
        isActionable
        primaryActionLabel="Click Me"
        onPrimaryAction={onPrimaryAction}
      />,
    );

    fireEvent.click(screen.getByText(/click me/i));
    expect(onPrimaryAction).toHaveBeenCalledTimes(1);
  });
});
