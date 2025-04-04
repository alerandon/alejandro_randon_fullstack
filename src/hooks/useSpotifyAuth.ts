const useSpotifyAuth = async (authCode: string) => {
  if  (!authCode) return;
  let data = null;

        try {
          const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Basic ${btoa(`${import.meta.env.VITE_SPOTIFY_API_CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_API_CLIENT_SECRET}`)}`,
            },
            body: new URLSearchParams({
              grant_type: 'authorization_code',
              code: authCode,
              redirect_uri: import.meta.env.VITE_SPOTIFY_API_REDIRECT_URI || '',
            }),
          });

          if (!response.ok) {
            throw new Error('Failed to exchange authorization code for token');
          }

          data = await response.json();
          const jsonData = JSON.stringify(data);
          sessionStorage.setItem('spotifyAccessToken', jsonData);
        } catch (error) {
          console.error('Error exchanging authorization code for token:', error);
        }

  return data;
};

export default useSpotifyAuth;
