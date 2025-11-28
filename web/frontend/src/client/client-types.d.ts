export interface FullResponse<T, U extends number> {
  'statusCode': U;
  'headers': object;
  'body': T;
}

export type MovieDbGetMoviesRequest = {
  /**
   * Limit will be applied by default if not passed. If the provided value exceeds the maximum allowed value a validation error will be thrown
   */
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  /**
   * Include cursor headers in response. Cursor keys built from orderBy clause
   */
  'cursor'?: boolean;
  /**
   * Cursor for forward pagination. List objects after this cursor position
   */
  'startAfter'?: string;
  /**
   * Cursor for backward pagination. List objects before this cursor position
   */
  'endBefore'?: string;
  'fields'?: Array<'createdAt' | 'description' | 'id' | 'popularity' | 'posterUrl' | 'rating' | 'releasedYear' | 'title' | 'updatedAt' | 'voteAverage' | 'votesCount'>;
  'where.createdAt.eq'?: string;
  'where.createdAt.neq'?: string;
  'where.createdAt.gt'?: string;
  'where.createdAt.gte'?: string;
  'where.createdAt.lt'?: string;
  'where.createdAt.lte'?: string;
  'where.createdAt.like'?: string;
  'where.createdAt.ilike'?: string;
  'where.createdAt.in'?: string;
  'where.createdAt.nin'?: string;
  'where.createdAt.contains'?: string;
  'where.createdAt.contained'?: string;
  'where.createdAt.overlaps'?: string;
  'where.description.eq'?: string;
  'where.description.neq'?: string;
  'where.description.gt'?: string;
  'where.description.gte'?: string;
  'where.description.lt'?: string;
  'where.description.lte'?: string;
  'where.description.like'?: string;
  'where.description.ilike'?: string;
  'where.description.in'?: string;
  'where.description.nin'?: string;
  'where.description.contains'?: string;
  'where.description.contained'?: string;
  'where.description.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.ilike'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.popularity.eq'?: number;
  'where.popularity.neq'?: number;
  'where.popularity.gt'?: number;
  'where.popularity.gte'?: number;
  'where.popularity.lt'?: number;
  'where.popularity.lte'?: number;
  'where.popularity.like'?: number;
  'where.popularity.ilike'?: number;
  'where.popularity.in'?: string;
  'where.popularity.nin'?: string;
  'where.popularity.contains'?: string;
  'where.popularity.contained'?: string;
  'where.popularity.overlaps'?: string;
  'where.posterUrl.eq'?: string;
  'where.posterUrl.neq'?: string;
  'where.posterUrl.gt'?: string;
  'where.posterUrl.gte'?: string;
  'where.posterUrl.lt'?: string;
  'where.posterUrl.lte'?: string;
  'where.posterUrl.like'?: string;
  'where.posterUrl.ilike'?: string;
  'where.posterUrl.in'?: string;
  'where.posterUrl.nin'?: string;
  'where.posterUrl.contains'?: string;
  'where.posterUrl.contained'?: string;
  'where.posterUrl.overlaps'?: string;
  'where.rating.eq'?: number;
  'where.rating.neq'?: number;
  'where.rating.gt'?: number;
  'where.rating.gte'?: number;
  'where.rating.lt'?: number;
  'where.rating.lte'?: number;
  'where.rating.like'?: number;
  'where.rating.ilike'?: number;
  'where.rating.in'?: string;
  'where.rating.nin'?: string;
  'where.rating.contains'?: string;
  'where.rating.contained'?: string;
  'where.rating.overlaps'?: string;
  'where.releasedYear.eq'?: number;
  'where.releasedYear.neq'?: number;
  'where.releasedYear.gt'?: number;
  'where.releasedYear.gte'?: number;
  'where.releasedYear.lt'?: number;
  'where.releasedYear.lte'?: number;
  'where.releasedYear.like'?: number;
  'where.releasedYear.ilike'?: number;
  'where.releasedYear.in'?: string;
  'where.releasedYear.nin'?: string;
  'where.releasedYear.contains'?: string;
  'where.releasedYear.contained'?: string;
  'where.releasedYear.overlaps'?: string;
  'where.title.eq'?: string;
  'where.title.neq'?: string;
  'where.title.gt'?: string;
  'where.title.gte'?: string;
  'where.title.lt'?: string;
  'where.title.lte'?: string;
  'where.title.like'?: string;
  'where.title.ilike'?: string;
  'where.title.in'?: string;
  'where.title.nin'?: string;
  'where.title.contains'?: string;
  'where.title.contained'?: string;
  'where.title.overlaps'?: string;
  'where.updatedAt.eq'?: string;
  'where.updatedAt.neq'?: string;
  'where.updatedAt.gt'?: string;
  'where.updatedAt.gte'?: string;
  'where.updatedAt.lt'?: string;
  'where.updatedAt.lte'?: string;
  'where.updatedAt.like'?: string;
  'where.updatedAt.ilike'?: string;
  'where.updatedAt.in'?: string;
  'where.updatedAt.nin'?: string;
  'where.updatedAt.contains'?: string;
  'where.updatedAt.contained'?: string;
  'where.updatedAt.overlaps'?: string;
  'where.voteAverage.eq'?: number;
  'where.voteAverage.neq'?: number;
  'where.voteAverage.gt'?: number;
  'where.voteAverage.gte'?: number;
  'where.voteAverage.lt'?: number;
  'where.voteAverage.lte'?: number;
  'where.voteAverage.like'?: number;
  'where.voteAverage.ilike'?: number;
  'where.voteAverage.in'?: string;
  'where.voteAverage.nin'?: string;
  'where.voteAverage.contains'?: string;
  'where.voteAverage.contained'?: string;
  'where.voteAverage.overlaps'?: string;
  'where.votesCount.eq'?: number;
  'where.votesCount.neq'?: number;
  'where.votesCount.gt'?: number;
  'where.votesCount.gte'?: number;
  'where.votesCount.lt'?: number;
  'where.votesCount.lte'?: number;
  'where.votesCount.like'?: number;
  'where.votesCount.ilike'?: number;
  'where.votesCount.in'?: string;
  'where.votesCount.nin'?: string;
  'where.votesCount.contains'?: string;
  'where.votesCount.contained'?: string;
  'where.votesCount.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.createdAt'?: 'asc' | 'desc';
  'orderby.description'?: 'asc' | 'desc';
  'orderby.id'?: 'asc' | 'desc';
  'orderby.popularity'?: 'asc' | 'desc';
  'orderby.posterUrl'?: 'asc' | 'desc';
  'orderby.rating'?: 'asc' | 'desc';
  'orderby.releasedYear'?: 'asc' | 'desc';
  'orderby.title'?: 'asc' | 'desc';
  'orderby.updatedAt'?: 'asc' | 'desc';
  'orderby.voteAverage'?: 'asc' | 'desc';
  'orderby.votesCount'?: 'asc' | 'desc';
}

/**
 * Default Response
 */
export type MovieDbGetMoviesResponseOK = Array<{ 'id'?: number | null; 'title'?: string | null; 'description'?: string | null; 'releasedYear'?: number | null; 'popularity'?: number | null; 'posterUrl'?: string | null; 'rating'?: number | null; 'votesCount'?: number | null; 'voteAverage'?: number | null; 'createdAt'?: string | null; 'updatedAt'?: string | null }>
export type MovieDbGetMoviesResponses =
  MovieDbGetMoviesResponseOK

export type MovieDbCreateMovieRequest = {
  'fields'?: Array<'createdAt' | 'description' | 'id' | 'popularity' | 'posterUrl' | 'rating' | 'releasedYear' | 'title' | 'updatedAt' | 'voteAverage' | 'votesCount'>;
  'id'?: number;
  'title': string;
  'description': string;
  'releasedYear': number;
  'popularity': number;
  'posterUrl'?: string | null;
  'rating'?: number | null;
  'votesCount'?: number | null;
  'voteAverage'?: number | null;
  'createdAt'?: string | null;
  'updatedAt'?: string | null;
}

/**
 * A Movie
 */
export type MovieDbCreateMovieResponseOK = { 'id'?: number | null; 'title'?: string | null; 'description'?: string | null; 'releasedYear'?: number | null; 'popularity'?: number | null; 'posterUrl'?: string | null; 'rating'?: number | null; 'votesCount'?: number | null; 'voteAverage'?: number | null; 'createdAt'?: string | null; 'updatedAt'?: string | null }
export type MovieDbCreateMovieResponses =
  MovieDbCreateMovieResponseOK

export type MovieDbUpdateMoviesRequest = {
  'fields'?: Array<'createdAt' | 'description' | 'id' | 'popularity' | 'posterUrl' | 'rating' | 'releasedYear' | 'title' | 'updatedAt' | 'voteAverage' | 'votesCount'>;
  'where.createdAt.eq'?: string;
  'where.createdAt.neq'?: string;
  'where.createdAt.gt'?: string;
  'where.createdAt.gte'?: string;
  'where.createdAt.lt'?: string;
  'where.createdAt.lte'?: string;
  'where.createdAt.like'?: string;
  'where.createdAt.ilike'?: string;
  'where.createdAt.in'?: string;
  'where.createdAt.nin'?: string;
  'where.createdAt.contains'?: string;
  'where.createdAt.contained'?: string;
  'where.createdAt.overlaps'?: string;
  'where.description.eq'?: string;
  'where.description.neq'?: string;
  'where.description.gt'?: string;
  'where.description.gte'?: string;
  'where.description.lt'?: string;
  'where.description.lte'?: string;
  'where.description.like'?: string;
  'where.description.ilike'?: string;
  'where.description.in'?: string;
  'where.description.nin'?: string;
  'where.description.contains'?: string;
  'where.description.contained'?: string;
  'where.description.overlaps'?: string;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.ilike'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.popularity.eq'?: number;
  'where.popularity.neq'?: number;
  'where.popularity.gt'?: number;
  'where.popularity.gte'?: number;
  'where.popularity.lt'?: number;
  'where.popularity.lte'?: number;
  'where.popularity.like'?: number;
  'where.popularity.ilike'?: number;
  'where.popularity.in'?: string;
  'where.popularity.nin'?: string;
  'where.popularity.contains'?: string;
  'where.popularity.contained'?: string;
  'where.popularity.overlaps'?: string;
  'where.posterUrl.eq'?: string;
  'where.posterUrl.neq'?: string;
  'where.posterUrl.gt'?: string;
  'where.posterUrl.gte'?: string;
  'where.posterUrl.lt'?: string;
  'where.posterUrl.lte'?: string;
  'where.posterUrl.like'?: string;
  'where.posterUrl.ilike'?: string;
  'where.posterUrl.in'?: string;
  'where.posterUrl.nin'?: string;
  'where.posterUrl.contains'?: string;
  'where.posterUrl.contained'?: string;
  'where.posterUrl.overlaps'?: string;
  'where.rating.eq'?: number;
  'where.rating.neq'?: number;
  'where.rating.gt'?: number;
  'where.rating.gte'?: number;
  'where.rating.lt'?: number;
  'where.rating.lte'?: number;
  'where.rating.like'?: number;
  'where.rating.ilike'?: number;
  'where.rating.in'?: string;
  'where.rating.nin'?: string;
  'where.rating.contains'?: string;
  'where.rating.contained'?: string;
  'where.rating.overlaps'?: string;
  'where.releasedYear.eq'?: number;
  'where.releasedYear.neq'?: number;
  'where.releasedYear.gt'?: number;
  'where.releasedYear.gte'?: number;
  'where.releasedYear.lt'?: number;
  'where.releasedYear.lte'?: number;
  'where.releasedYear.like'?: number;
  'where.releasedYear.ilike'?: number;
  'where.releasedYear.in'?: string;
  'where.releasedYear.nin'?: string;
  'where.releasedYear.contains'?: string;
  'where.releasedYear.contained'?: string;
  'where.releasedYear.overlaps'?: string;
  'where.title.eq'?: string;
  'where.title.neq'?: string;
  'where.title.gt'?: string;
  'where.title.gte'?: string;
  'where.title.lt'?: string;
  'where.title.lte'?: string;
  'where.title.like'?: string;
  'where.title.ilike'?: string;
  'where.title.in'?: string;
  'where.title.nin'?: string;
  'where.title.contains'?: string;
  'where.title.contained'?: string;
  'where.title.overlaps'?: string;
  'where.updatedAt.eq'?: string;
  'where.updatedAt.neq'?: string;
  'where.updatedAt.gt'?: string;
  'where.updatedAt.gte'?: string;
  'where.updatedAt.lt'?: string;
  'where.updatedAt.lte'?: string;
  'where.updatedAt.like'?: string;
  'where.updatedAt.ilike'?: string;
  'where.updatedAt.in'?: string;
  'where.updatedAt.nin'?: string;
  'where.updatedAt.contains'?: string;
  'where.updatedAt.contained'?: string;
  'where.updatedAt.overlaps'?: string;
  'where.voteAverage.eq'?: number;
  'where.voteAverage.neq'?: number;
  'where.voteAverage.gt'?: number;
  'where.voteAverage.gte'?: number;
  'where.voteAverage.lt'?: number;
  'where.voteAverage.lte'?: number;
  'where.voteAverage.like'?: number;
  'where.voteAverage.ilike'?: number;
  'where.voteAverage.in'?: string;
  'where.voteAverage.nin'?: string;
  'where.voteAverage.contains'?: string;
  'where.voteAverage.contained'?: string;
  'where.voteAverage.overlaps'?: string;
  'where.votesCount.eq'?: number;
  'where.votesCount.neq'?: number;
  'where.votesCount.gt'?: number;
  'where.votesCount.gte'?: number;
  'where.votesCount.lt'?: number;
  'where.votesCount.lte'?: number;
  'where.votesCount.like'?: number;
  'where.votesCount.ilike'?: number;
  'where.votesCount.in'?: string;
  'where.votesCount.nin'?: string;
  'where.votesCount.contains'?: string;
  'where.votesCount.contained'?: string;
  'where.votesCount.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'title': string;
  'description': string;
  'releasedYear': number;
  'popularity': number;
  'posterUrl'?: string | null;
  'rating'?: number | null;
  'votesCount'?: number | null;
  'voteAverage'?: number | null;
  'createdAt'?: string | null;
  'updatedAt'?: string | null;
}

/**
 * Default Response
 */
export type MovieDbUpdateMoviesResponseOK = Array<{ 'id'?: number | null; 'title'?: string | null; 'description'?: string | null; 'releasedYear'?: number | null; 'popularity'?: number | null; 'posterUrl'?: string | null; 'rating'?: number | null; 'votesCount'?: number | null; 'voteAverage'?: number | null; 'createdAt'?: string | null; 'updatedAt'?: string | null }>
export type MovieDbUpdateMoviesResponses =
  MovieDbUpdateMoviesResponseOK

export type MovieDbGetMovieByIdRequest = {
  'fields'?: Array<'createdAt' | 'description' | 'id' | 'popularity' | 'posterUrl' | 'rating' | 'releasedYear' | 'title' | 'updatedAt' | 'voteAverage' | 'votesCount'>;
  'id': number;
}

/**
 * A Movie
 */
export type MovieDbGetMovieByIdResponseOK = { 'id'?: number | null; 'title'?: string | null; 'description'?: string | null; 'releasedYear'?: number | null; 'popularity'?: number | null; 'posterUrl'?: string | null; 'rating'?: number | null; 'votesCount'?: number | null; 'voteAverage'?: number | null; 'createdAt'?: string | null; 'updatedAt'?: string | null }
export type MovieDbGetMovieByIdResponses =
  MovieDbGetMovieByIdResponseOK

export type MovieDbUpdateMovieRequest = {
  'fields'?: Array<'createdAt' | 'description' | 'id' | 'popularity' | 'posterUrl' | 'rating' | 'releasedYear' | 'title' | 'updatedAt' | 'voteAverage' | 'votesCount'>;
  'id': number;
  'title': string;
  'description': string;
  'releasedYear': number;
  'popularity': number;
  'posterUrl'?: string | null;
  'rating'?: number | null;
  'votesCount'?: number | null;
  'voteAverage'?: number | null;
  'createdAt'?: string | null;
  'updatedAt'?: string | null;
}

/**
 * A Movie
 */
export type MovieDbUpdateMovieResponseOK = { 'id'?: number | null; 'title'?: string | null; 'description'?: string | null; 'releasedYear'?: number | null; 'popularity'?: number | null; 'posterUrl'?: string | null; 'rating'?: number | null; 'votesCount'?: number | null; 'voteAverage'?: number | null; 'createdAt'?: string | null; 'updatedAt'?: string | null }
export type MovieDbUpdateMovieResponses =
  MovieDbUpdateMovieResponseOK

export type MovieDbDeleteMoviesRequest = {
  'fields'?: Array<'createdAt' | 'description' | 'id' | 'popularity' | 'posterUrl' | 'rating' | 'releasedYear' | 'title' | 'updatedAt' | 'voteAverage' | 'votesCount'>;
  'id': number;
}

/**
 * A Movie
 */
export type MovieDbDeleteMoviesResponseOK = { 'id'?: number | null; 'title'?: string | null; 'description'?: string | null; 'releasedYear'?: number | null; 'popularity'?: number | null; 'posterUrl'?: string | null; 'rating'?: number | null; 'votesCount'?: number | null; 'voteAverage'?: number | null; 'createdAt'?: string | null; 'updatedAt'?: string | null }
export type MovieDbDeleteMoviesResponses =
  MovieDbDeleteMoviesResponseOK

export type GetDbTestRequest = {
  
}

export type GetDbTestResponseOK = unknown
export type GetDbTestResponses =
  FullResponse<GetDbTestResponseOK, 200>

export type GetDbPopularRequest = {
  
}

export type GetDbPopularResponseOK = unknown
export type GetDbPopularResponses =
  FullResponse<GetDbPopularResponseOK, 200>

export type GetDbTrendingRequest = {
  
}

export type GetDbTrendingResponseOK = unknown
export type GetDbTrendingResponses =
  FullResponse<GetDbTrendingResponseOK, 200>

export type GetDbSearchRequest = {
  
}

export type GetDbSearchResponseOK = unknown
export type GetDbSearchResponses =
  FullResponse<GetDbSearchResponseOK, 200>



export interface Client {
  setBaseUrl(newUrl: string): void;
  setDefaultHeaders(headers: object): void;
  setDefaultFetchParams(fetchParams: RequestInit): void;
  /**
   * Get movies.
   *
   * Fetch movies from the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  movieDbGetMovies(req: MovieDbGetMoviesRequest): Promise<MovieDbGetMoviesResponses>;
  /**
   * Create movie.
   *
   * Add new movie to the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  movieDbCreateMovie(req: MovieDbCreateMovieRequest): Promise<MovieDbCreateMovieResponses>;
  /**
   * Update movies.
   *
   * Update one or more movies in the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  movieDbUpdateMovies(req: MovieDbUpdateMoviesRequest): Promise<MovieDbUpdateMoviesResponses>;
  /**
   * Get Movie by id.
   *
   * Fetch Movie using its id from the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  movieDbGetMovieById(req: MovieDbGetMovieByIdRequest): Promise<MovieDbGetMovieByIdResponses>;
  /**
   * Update movie.
   *
   * Update movie in the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  movieDbUpdateMovie(req: MovieDbUpdateMovieRequest): Promise<MovieDbUpdateMovieResponses>;
  /**
   * Delete movies.
   *
   * Delete one or more movies from the Database.
   * @param req - request parameters object
   * @returns the API response body
   */
  movieDbDeleteMovies(req: MovieDbDeleteMoviesRequest): Promise<MovieDbDeleteMoviesResponses>;
  /**
   * @param req - request parameters object
   * @returns the API response body
   */
  getDbTest(req: GetDbTestRequest): Promise<GetDbTestResponses>;
  /**
   * @param req - request parameters object
   * @returns the API response body
   */
  getDbPopular(req: GetDbPopularRequest): Promise<GetDbPopularResponses>;
  /**
   * @param req - request parameters object
   * @returns the API response body
   */
  getDbTrending(req: GetDbTrendingRequest): Promise<GetDbTrendingResponses>;
  /**
   * @param req - request parameters object
   * @returns the API response body
   */
  getDbSearch(req: GetDbSearchRequest): Promise<GetDbSearchResponses>;
}
type PlatformaticFrontendClient = Omit<Client, 'setBaseUrl'>
type BuildOptions = {
  headers?: object
}
export default function build(url: string, options?: BuildOptions): PlatformaticFrontendClient
