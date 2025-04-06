export interface SpotifyAlbumsPagination {
  href: string;
  items: SpotifyAlbum[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface SpotifyAlbum {
  id: string;
  name: string;
  publishedDate: string;
  imageUrl: string;
}
