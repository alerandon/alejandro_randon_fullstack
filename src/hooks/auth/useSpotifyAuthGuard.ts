import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
dayjs.extend(isSameOrAfter);

const useSpotifyAuthGuard = () => {
  const sessionToken = sessionStorage.getItem('spotifyAccess') ?? '';
  const ACCESS_TOKEN_OBJECT = sessionToken ? JSON.parse(sessionToken) : null;
  const isProcessed = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isProcessed.current) return;

    const accessToken = ACCESS_TOKEN_OBJECT?.access_token ?? undefined;
    const expiresIn = ACCESS_TOKEN_OBJECT?.expires_in ?? undefined;
    const tokenIsExpired = dayjs().isSameOrAfter(dayjs(expiresIn));

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
