/** @format */

export const API_KEY = "51a5442d7cce7c1b643b9e61f0e79af4";
export const DOMAIN_NAME = "https://api.themoviedb.org";
export const POPULAR_MOVIES = `${DOMAIN_NAME}/3/discover/movie?language=en-US&sort_by=popularity.desc&page=1`;
// export const UPCOMING_MOVIES = `${DOMAIN_NAME}/3/discover/movie?&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}`;
export const UPCOMING_MOVIES =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
