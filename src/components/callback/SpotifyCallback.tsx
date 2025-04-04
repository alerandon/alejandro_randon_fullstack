import React from 'react';
import { useNavigate } from 'react-router';
import { authSpotifyAccount } from '../../services/spotifyAuthService';

const SpotifyCallback = () => {
  const navigate = useNavigate();
  const isProcessed = React.useRef(false);

  React.useEffect(() => {
    if (isProcessed.current) return;

    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get('code');

    if (!authCode) {
      console.error('No se encontró el código de autorización en la URL');
      navigate('/');
      return;
    }

    (async () => {
      authSpotifyAccount(authCode).catch((error) => {
        navigate('/');
        return;
      });
      navigate('/search');
    })();

    isProcessed.current = true;
  }, [navigate]);

  return (
    <div className="flex h-screen items-center justify-center">
      <p>Procesando inicio de sesión...</p>
    </div>
  );
};

export default SpotifyCallback;
