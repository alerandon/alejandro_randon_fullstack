import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const SpotifyCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      console.log('Authorization Code:', code);
      navigate('/search');
    } else {
      console.error('No se encontró el código de autorización en la URL');
      navigate('/error');
    }
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Procesando inicio de sesión...</p>
    </div>
  );
};

export default SpotifyCallback;
