import { History } from "history"; // eslint-disable-line no-unused-vars
import { history } from "../../data/react-router.d";
import "../../data/services/types.d";

/**
 * @typedef {object} IHomepageProps
 *
 * @property {History} history
 */

/**
 * @typedef {object} IHomepageState
 *
 * @property {IMoviesList | null} top10
 * @property {IUpcomingMoviesList | null} upcoming
 * @property {IMoviesList | null} popular
 */

export const PropTypes = {
	history,
};
