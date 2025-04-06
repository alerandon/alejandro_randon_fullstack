import { render, screen } from '@testing-library/react';
import MyAlbumsHeroSection from '../../../../components/albums/sections/MyAlbumsHeroSection';

describe('MyAlbumsHeroSection', () => {
  it('debería renderizar correctamente el título y el subtítulo', () => {
    render(<MyAlbumsHeroSection />);

    expect(
      screen.getByRole('heading', { name: /mis albumes guardados/i })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /disfruta de tu música a un solo click y descube que discos has guardado dentro de “mis álbumes”/i
      )
    ).toBeInTheDocument();
  });
});
