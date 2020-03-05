import * as H from "history";
import "../../data/services/service-types.d";

/**
 * @typedef {object} IHomepageProps
 *
 * @property {H.History} history
 */

/**
 * @typedef {object} IHomepageState
 *
 * @property {IMoviesList | null} top10
 * @property {IUpcomingMoviesList | null} upcoming
 * @property {IMoviesList | null} popular
 */
