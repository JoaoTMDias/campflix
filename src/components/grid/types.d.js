import { shape, number, oneOfType, arrayOf, node } from "prop-types";

/**
 * @typedef {object} IGridColumns
 *
 * @property {number} small
 * @property {number} medium
 * @property {number} large
 *
 */

/**
 * @typedef {object} IGridProps
 *
 * @property {IGridColumns} columns
 * @property {React.ReactNode} children
 */

export const IGridPropTypes = {
	columns: shape({
		small: number,
		medium: number,
		large: number,
	}),
	children: oneOfType([arrayOf(node), node]).isRequired,
};
