/**
 * Movie
 * A Movie
 */
export interface Movie {
  id?: number;
  createdAt?: string | null;
  description: string;
  popularity: number;
  posterUrl?: string | null;
  rating?: number | null;
  releasedYear: number;
  title: string;
  updatedAt?: string | null;
  voteAverage?: number | null;
  votesCount?: number | null;
}