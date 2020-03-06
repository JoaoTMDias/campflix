/* eslint-disable no-unused-vars */
import "../../data/services/types.d";
import { History } from "history";
import { arrayOf, shape, string } from "prop-types";
import { history } from "../../data/react-router.d";
import { IMoviesResultPropTypes } from "../../data/services/types.d";

/**
 * @typedef {object} IRowProps
 *
 * @property {History} [history]
 * @property {string} [className]
 * @property {IMoviesResult[]} [data]
 * @property {string} id
 * @property {string} title
 */

export const IRowPropTypes = {
	history,
	className: string,
	data: arrayOf(shape(IMoviesResultPropTypes)),
	id: string,
	title: string,
};
