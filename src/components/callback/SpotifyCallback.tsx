import React from 'react';
import { useNavigate } from 'react-router';

const SpotifyCallback = () => {
  const navigate = useNavigate();
  const isProcessed = React.useRef(false);

  React.useEffect(() => {
    if (isProcessed.current) return;

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    console.log('Authorization Code:', code);

    if (code) {
      console.log('Código de autorización encontrado:', code);
      sessionStorage.setItem('spotifyAuthCode', code);
      console.log('Token de acceso guardado en sessionStorage:', sessionStorage);
      navigate('/search');
    } else {
      console.error('No se encontró el código de autorización en la URL');
      navigate('/');
    }

    isProcessed.current = true;
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Procesando inicio de sesión...</p>
    </div>
  );
};

export default SpotifyCallback;
