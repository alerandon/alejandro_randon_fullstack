export interface SpotifyArtistsPagination {
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
  imageUrl: string;
  followers: number;
  popularityScore: number;
}
