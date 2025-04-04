import React from 'react';
import { useNavigate } from 'react-router';
import { authSpotifyAccount } from '../../services/spotifyAuthService';

const SpotifyCallback = () => {
  const navigate = useNavigate();
  const isProcessed = React.useRef(false);

  React.useEffect(() => {
    if (isProcessed.current) return;

    const urlParams = new URLSearchParams(window.location.search);
    const authCodeParam = urlParams.get('code');
    const authUserBeforeRedirect = async (authCode: string) => {
      try {
        await authSpotifyAccount(authCode);
        navigate('/search');
      } catch (error) {
        console.error('Error al procesar el código de autorización:', error);
        navigate('/');
        return;
      }
    };

    if (!authCodeParam) {
      console.error('No se encontró el código de autorización en la URL');
      navigate('/');
      return;
    }

    authUserBeforeRedirect(authCodeParam);
    isProcessed.current = true;
  }, [navigate]);

  return (
    <div className="flex h-screen items-center justify-center">
      <p>Procesando inicio de sesión...</p>
    </div>
  );
};

export default SpotifyCallback;
