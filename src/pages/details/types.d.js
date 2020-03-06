/* eslint-disable no-unused-vars */
import { RouteComponentProps } from "react-router-dom";
import { IMovieDetails } from "../../data/services/types.d";
import { match } from "../../data/react-router.d";

/**
 * @typedef {RouteComponentProps} DetailsPageRouterProps
 * @property {string} id
 */

/**
 * @typedef {DetailsPageRouterProps} IDetailsPageProps
 */

/**
 * @typedef {object} IDetailsPageState
 * @property {IMovieDetails | null} data
 */

export const PropTypes = {
	match,
};
