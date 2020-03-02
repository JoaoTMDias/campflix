import axios, { AxiosResponse } from "axios";
import { IMoviesList, IMovieDetails, IUpcomingMoviesList } from "./types";

/**
 * Handles the data fetching of different types of movies lists
 *
 * @class Movies
 */
class Movies {
  constructor() {
    this.baseUrl = "https://api.themoviedb.org/3/movie";
    this.apiKey = process.env.REACT_APP_API_KEY;
  }

  /**
   * Get the top rated movies on The Movie Database.
   *
   * @param {object} options
   * @param {string} [options.language]
   * @param {number} [options.page]
   * @public
   * @returns {Promise<AxiosResponse<IMoviesList>>}
   * @memberof Movies
   */
  getTopRated({ language = "en-US", page = 1 }) {
    const url = `${this.baseUrl}/top_rated?api_key=${this.apiKey}&language=${language}&page=${page}`;
    return axios.get(url);
  }

  /**
   * Get a list of upcoming movies in theatres.
   * This is a release type query that looks for all movies that have
   * a release type of 2 or 3 within the specified date range.
   *
   * @param {object} options
   * @param {string} [options.language]
   * @param {number} [options.page]
   * @public
   * @returns {Promise<AxiosResponse<IUpcomingMoviesList>>}
   * @memberof Movies
   */
  getUpcoming({ language = "en-US", page = 1 }) {
    const url = `${this.baseUrl}/upcoming?api_key=${this.apiKey}&language=${language}&page=${page}`;
    return axios.get(url);
  }

  /**
   * Get a list of the current popular movies on TMDb. This list updates daily.
   *
   * @param {object} options
   * @param {string} [options.language]
   * @param {number} [options.page]
   * @public
   * @returns {Promise<AxiosResponse<IMoviesList>>}
   * @memberof Movies
   */
  getPopular({ language = "en-US", page = 1 }) {
    const url = `${this.baseUrl}/popular?api_key=${this.apiKey}&language=${language}&page=${page}`;
    return axios.get(url);
  }

  /**
   * Get the primary information about a movie.
   *
   * @param {object} options
   * @param {string} [options.language = "en"]
   * @param {string} options.movie_id
   * @public
   * @returns {Promise<AxiosResponse<IMovieDetails>>}
   * @memberof Movies
   */
  getMovieDetails({ language = "en", movie_id }) {
    const url = `${this.baseUrl}/${movie_id}?api_key=${this.apiKey}&language=${language}`;
    return axios.get(url);
  }
}

export default new Movies();
