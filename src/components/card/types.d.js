import { string, oneOfType, node, arrayOf } from "prop-types";

/**
 * @typedef {object} ICardProps
 * @property {string} id
 * @property {string} title
 */

export const ICardPropTypes = {
	children: oneOfType([arrayOf(node), node]).isRequired,
	id: string,
	title: string,
};
