export interface SpotifyArtistsSearch {
  href: string;
  items: SpotifyArtist[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface SpotifyArtist {
  id: string;
  name: string;
  followers: {
    total: number;
  };
  images: Array<{
    url: string;
  }>;
  popularity: number;
}
