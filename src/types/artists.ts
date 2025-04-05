interface SpotifyFormattedArtist {
  artistName: string;
  followers: number;
  imageUrl: string;
}

export interface SpotifyArtistsResponse {
  href: string;
  items: SpotifyFormattedArtist[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}
