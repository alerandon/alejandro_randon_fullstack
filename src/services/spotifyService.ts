import dayjs from 'dayjs';
import { SpotifyArtist, SpotifyArtistsPagination } from '../types/artists';
import { SpotifyAlbum, SpotifyAlbumsPagination } from '../types/albums';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

const clientId = process.env.VITE_SPOTIFY_API_CLIENT_ID;
const clientSecret = process.env.VITE_SPOTIFY_API_CLIENT_SECRET;
const redirectUri = process.env.VITE_SPOTIFY_API_REDIRECT_URI;

const spotifyService = {
  redirectToLogin: () => {
    const scopes = [
      'user-read-private',
      'user-read-email',
      'playlist-read-private',
      'user-library-read',
      'user-library-modify',
    ];

    if (!clientId || !redirectUri) {
      console.error('Faltan variables de entorno para Spotify');
      return;
    }

    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(
      scopes.join(' '),
    )}&redirect_uri=${encodeURIComponent(redirectUri)}`;
    window.location.href = authUrl;
  },

  authAccount: async (authCode: string) => {
    if (!authCode) return;
    let data = null;

    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code: authCode,
          redirect_uri: redirectUri || '',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to exchange authorization code for token');
      }

      data = await response.json();
      const expiresInAsDate = dayjs()
        .add(data.expires_in, 'second')
        .toISOString();
      const parsedData = {
        ...data,
        expires_in: expiresInAsDate,
      };

      const jsonData = JSON.stringify(parsedData);
      sessionStorage.setItem('spotifyAccess', jsonData);
    } catch (error) {
      console.error('Error exchanging authorization code for token:', error);
    }

    return data;
  },

  getArtists: async (
    query: string,
    page: number = 1,
    token: string,
  ): Promise<SpotifyArtistsPagination> => {
    if (!query) {
      console.error('El parámetro de búsqueda (query) está vacío.');
      throw new Error('El parámetro de búsqueda no puede estar vacío.');
    }

    if (!token) {
      console.error('El token de acceso no está disponible.');
      throw new Error(
        'El token de acceso es requerido para realizar esta solicitud.',
      );
    }

    try {
      const limit = 4;
      const offset = (page - 1) * limit;
      const response = await fetch(
        `${SPOTIFY_API_BASE_URL}/search?q=${encodeURIComponent(query)}&type=artist&limit=${limit}&offset=${offset}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error en la respuesta de la API:', errorData);
        throw new Error(
          `Error al obtener la lista de artistas: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();
      const parsedItems = data.artists.items.map((data: any): SpotifyArtist => {
        const formattedName = data?.name.replace(/ /g, '+');
        const artistImageUrl =
          data?.images[0]?.url ||
          `https://placehold.co/500/gray/white?text=${formattedName}`;

        return {
          id: data.id,
          name: data.name,
          imageUrl: artistImageUrl,
          followers: data.followers?.total || 0,
          popularityScore: data.popularity || 0,
        };
      });
      const parsedData = {
        ...data.artists,
        items: parsedItems,
      };

      return parsedData;
    } catch (error) {
      console.error('Error en getArtists:', error);
      throw error;
    }
  },

  getArtistById: async (
    artistId: string,
    token: string,
  ): Promise<SpotifyArtist> => {
    try {
      const response = await fetch(
        `${SPOTIFY_API_BASE_URL}/artists/${artistId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error('Error al obtener el artista');
      }

      const data = await response.json();
      const formattedName = data.name?.replace(/ /g, '+');
      const artistImageUrl =
        data?.images[0]?.url ||
        `https://placehold.co/500/gray/white?text=${formattedName}`;

      const parsedData: SpotifyArtist = {
        id: data.id,
        name: data.name,
        imageUrl: artistImageUrl,
        followers: data.followers?.total || 0,
        popularityScore: data.popularity || 0,
      };

      return parsedData;
    } catch (error) {
      console.error('Error en getArtistById:', error);
      throw error;
    }
  },

  getArtistAlbums: async (
    artistId: string,
    token: string,
    page: number = 1,
  ) => {
    if (!artistId) {
      console.error('El ID del artista está vacío.');
      throw new Error('El ID del artista no puede estar vacío.');
    }

    if (!token) {
      console.error('El token de acceso no está disponible.');
      throw new Error(
        'El token de acceso es requerido para realizar esta solicitud.',
      );
    }

    try {
      const limit = 8;
      const offset = (page - 1) * limit;
      const response = await fetch(
        `${SPOTIFY_API_BASE_URL}/artists/${artistId}/albums?limit=${limit}&offset=${offset}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error en la respuesta de la API:', errorData);
        throw new Error(
          `Error al obtener los álbumes del artista: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();
      const parsedItems = data.items.map((data: any): SpotifyAlbum => {
        const formattedName = data?.name.replace(/ /g, '+');
        const albumImageUrl =
          data?.images[0]?.url ||
          `https://placehold.co/500/gray/white?text=${formattedName}`;

        return {
          id: data.id,
          name: data.name,
          publishedDate: data.release_date,
          imageUrl: albumImageUrl,
        };
      });
      const parsedData = {
        ...data,
        items: parsedItems,
      };

      return parsedData;
    } catch (error) {
      console.error('Error en getArtistAlbums:', error);
      throw error;
    }
  },

  checkUserSavedAlbums: async (albumIds: string[], token: string) => {
    if (!albumIds || albumIds.length === 0) {
      console.error('No se proporcionaron IDs de álbumes para verificar.');
      throw new Error('Se requiere al menos un ID de álbum para verificar.');
    }

    if (!token) {
      console.error('El token de acceso no está disponible.');
      throw new Error(
        'El token de acceso es requerido para realizar esta solicitud.',
      );
    }

    try {
      const response = await fetch(
        `${SPOTIFY_API_BASE_URL}/me/albums/contains?ids=${albumIds.join(',')}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error en la respuesta de la API:', errorData);
        throw new Error(
          `Error al verificar los álbumes guardados: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error en checkUserSavedAlbums:', error);
      throw error;
    }
  },

  removeUserSavedAlbums: async (albumIds: string[], token: string) => {
    if (!albumIds || albumIds.length === 0) {
      console.error('No se proporcionaron IDs de álbumes para eliminar.');
      throw new Error('Se requiere al menos un ID de álbum para eliminar.');
    }

    if (!token) {
      console.error('El token de acceso no está disponible.');
      throw new Error(
        'El token de acceso es requerido para realizar esta solicitud.',
      );
    }

    try {
      const response = await fetch(`${SPOTIFY_API_BASE_URL}/me/albums`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ids: albumIds }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error en la respuesta de la API:', errorData);
        throw new Error(
          `Error al eliminar los álbumes guardados: ${response.status} ${response.statusText}`,
        );
      }

      return true;
    } catch (error) {
      console.error('Error en removeUserSavedAlbums:', error);
      throw error;
    }
  },

  saveAlbumsForCurrentUser: async (albumIds: string[], token: string) => {
    if (!albumIds || albumIds.length === 0) {
      console.error('No se proporcionaron IDs de álbumes para guardar.');
      throw new Error('Se requiere al menos un ID de álbum para guardar.');
    }

    if (!token) {
      console.error('El token de acceso no está disponible.');
      throw new Error(
        'El token de acceso es requerido para realizar esta solicitud.',
      );
    }

    try {
      const response = await fetch(`${SPOTIFY_API_BASE_URL}/me/albums`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ids: albumIds }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error en la respuesta de la API:', errorData);
        throw new Error(
          `Error al guardar los álbumes: ${response.status} ${response.statusText}`,
        );
      }

      return true;
    } catch (error) {
      console.error('Error en saveAlbumsForCurrentUser:', error);
      throw error;
    }
  },

  getUserSavedAlbums: async (
    token: string,
    page: number = 1,
  ): Promise<SpotifyAlbumsPagination> => {
    if (!token) {
      console.error('El token de acceso no está disponible.');
      throw new Error(
        'El token de acceso es requerido para realizar esta solicitud.',
      );
    }

    try {
      const limit = 8;
      const offset = (page - 1) * limit;
      const response = await fetch(
        `${SPOTIFY_API_BASE_URL}/me/albums?limit=${limit}&offset=${offset}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error en la respuesta de la API:', errorData);
        throw new Error(
          `Error al obtener los álbumes guardados del usuario: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();
      const parsedItems = data.items.map((data: any): SpotifyAlbum => {
        const formattedName = data?.album?.name.replace(/ /g, '+');
        const albumImageUrl =
          data?.album?.images[0]?.url ||
          `https://placehold.co/500/gray/white?text=${formattedName}`;

        return {
          id: data.album.id,
          name: data.album.name,
          publishedDate: data.album.release_date,
          imageUrl: albumImageUrl,
        };
      });
      const parsedData = {
        ...data,
        items: parsedItems,
      };

      return parsedData;
    } catch (error) {
      console.error('Error en getUserSavedAlbums:', error);
      throw error;
    }
  },
};

export default spotifyService;
export { clientId, clientSecret, redirectUri };
