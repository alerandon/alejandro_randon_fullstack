import { render, screen } from '@testing-library/react';
import SearchHeroSection from '../../../../components/search/sections/SearchHeroSection';

describe('SearchHeroSection', () => {
  it('should render the hero section correctly', () => {
    render(<SearchHeroSection />);

    expect(
      screen.getByText((content, element) => {
        const hasText = (node: Element) =>
          node.textContent === 'Busca tus artistas';
        const nodeHasText = hasText(element!);
        const childrenDontHaveText = Array.from(element!.children).every(
          (child) => !hasText(child),
        );
        return nodeHasText && childrenDontHaveText;
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /encuentra tus artistas favoritos gracias a nuestro buscador/i,
      ),
    ).toBeInTheDocument();
  });
});
