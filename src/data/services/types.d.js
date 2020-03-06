import { arrayOf, bool, number, oneOf, shape, string } from "prop-types";

/**
 * @typedef {object} IMovieDates
 *
 * @property {string} minimum
 * @property {string} maximum
 */

/**
 * @typedef {object} IMoviesList
 * @property {number} page
 * @property {number} total_results
 * @property {number} total_pages
 * @property {IMoviesResult[]} results
 */

/**
 * @typedef {object} IUpcomingMoviesList
 * @property {number} page
 * @property {number} total_results
 * @property {number} total_pages
 * @property {IMoviesResult[]} results
 * @property {IMovieDates} dates
 */

/**
 * @typedef {IMoviesList | IUpcomingMoviesList} IMovieData
 */

/**
 * @typedef {object} IMoviesResult
 * @property {boolean} adult
 * @property {string} backdrop_path
 * @property {number[]} genre_ids
 * @property {number} id
 * @property {string} original_language
 * @property {string} original_title
 * @property {string} overview
 * @property {number} popularity
 * @property {string} poster_path
 * @property {string} release_date
 * @property {string} title
 * @property {boolean} video
 * @property {number} vote_average
 * @property {number} vote_count
 */

/**
 * @typedef {object} IMovieDetails
 * @property {boolean} adult
 * @property {string} backdrop_path
 * @property {BelongsToCollection} belongs_to_collection
 * @property {number} budget
 * @property {Genre[]} genres
 * @property {string} homepage
 * @property {number} id
 * @property {string} imdb_id
 * @property {string} original_language
 * @property {string} original_title
 * @property {string} overview
 * @property {number} popularity
 * @property {string} poster_path
 * @property {ProductionCompany[]} production_companies
 * @property {ProductionCountry[]} production_countries
 * @property {string} release_date
 * @property {number} revenue
 * @property {number} runtime
 * @property {SpokenLanguage[]} spoken_languages
 * @property {string} status
 * @property {string} tagline
 * @property {string} title
 * @property {boolean} video
 * @property {number} vote_average
 * @property {number} vote_count
 */

/**
 * @typedef {object} BelongsToCollection
 * @property {number} id
 * @property {string} name
 * @property {string} poster_path
 * @property {string} backdrop_path
 */

/**
 * @typedef {object} Genre
 * @property {number} id
 * @property {string} name
 */

/**
 * @typedef {object} ProductionCompany
 * @property {number} id
 * @property {string | null} logo_path
 * @property {string} name
 * @property {string} origin_country
 */

/**
 * @typedef {object} ProductionCountry
 * @property {string} iso_3166_1
 * @property {string} name
 */

/**
 * @typedef {object} SpokenLanguage
 * @property {string} iso_639_1
 * @property {string} name
 */

export const IMovieDetailsPropTypes = {
	adult: bool,
	backdrop_path: bool,
	belongs_to_collection: shape({
		id: number,
		name: string,
		poster_path: string,
		backdrop_path: string,
	}),
	budget: number,
	genres: arrayOf(
		shape({
			id: number,
			name: string,
		})
	),
	homepage: string,
	id: number,
	imdb_id: string,
	original_language: string,
	original_title: string,
	overview: string,
	popularity: number,
	poster_path: string,
	production_companies: arrayOf(
		shape({
			id: number,
			logo_path: oneOf([string, null]),
			name: string,
			origin_country: string,
		})
	),
	production_countries: arrayOf(
		shape({
			iso_3166_1: string,
			name: string,
		})
	),
	release_date: string,
	revenue: number,
	runtime: number,
	spoken_languages: arrayOf(
		shape({
			iso_639_1: string,
			name: string,
		})
	),
	status: string,
	tagline: string,
	title: string,
	video: bool,
	vote_average: number,
	vote_count: number,
};

export const IMoviesResultPropTypes = {
	adult: bool,
	backdrop_path: string,
	genre_ids: arrayOf(number),
	id: number,
	original_language: string,
	original_title: string,
	overview: string,
	popularity: number,
	poster_path: string,
	release_date: string,
	title: string,
	video: bool,
	vote_average: number,
	vote_count: number,
};
