import dayjs from 'dayjs';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';

const useSpotifyAuthGuard = () => {
  const sessionToken = sessionStorage.getItem('spotifyAccess') ?? '';
  console.log('sessionToken: ', sessionToken);
  const ACCESS_TOKEN_OBJECT = sessionToken ? JSON.parse(sessionToken) : null;
  const isProcessed = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isProcessed.current) return;

    const accessToken = ACCESS_TOKEN_OBJECT?.access_token;
    const expiresAt = ACCESS_TOKEN_OBJECT?.expires_at;
    const currentTime = dayjs().toDate();
    

    const tokenIsExpired = expiresAt && currentTime >= expiresAt;
    if (!accessToken || tokenIsExpired) {
      console.error(
        'Access token is missing or expired. Redirecting to login.',
      );
      navigate('/');
      return;
    }

    isProcessed.current = true;
  }, [ACCESS_TOKEN_OBJECT, navigate]);
};

export default useSpotifyAuthGuard;
