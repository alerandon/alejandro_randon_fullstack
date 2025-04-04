import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';

export const redirectToSpotifyLogin = () => {
  const clientId = import.meta.env.VITE_SPOTIFY_API_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_SPOTIFY_API_REDIRECT_URI;
  const scopes = [
    'user-read-private',
    'user-read-email',
    'playlist-read-private',
  ];

  if (!clientId || !redirectUri) {
    console.error('Faltan variables de entorno para Spotify');
    return;
  }

  // TODO: Add if there is time the state query parameter to prevent CSRF attacks
  const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&scope=${encodeURIComponent(
    scopes.join(' ')
  )}&redirect_uri=${encodeURIComponent(redirectUri)}`;
  window.location.href = authUrl;
};

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

export const getArtists = async (query: string, token: string) => {
  try {
    const response = await fetch(`${SPOTIFY_API_BASE_URL}/search?q=${encodeURIComponent(query)}&type=artist`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener la lista de artistas');
    }

    const data = await response.json();
    return data.artists.items;
  } catch (error) {
    console.error('Error en getArtists:', error);
    throw error;
  }
};

export const getArtistById = async (artistId: string, token: string) => {
  try {
    const response = await fetch(`${SPOTIFY_API_BASE_URL}/artists/${artistId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener el artista');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en getArtistById:', error);
    throw error;
  }
};
