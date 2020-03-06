/* eslint-disable no-unused-vars */
import React from "react";
import { IGridPropTypes, IGridProps } from "./types.d";

/**
 * Grid component
 *
 * @author João Dias
 * @returns {React.FunctionComponent<IGridProps>}
 */
const Grid = ({ columns, children }) => {
	const { small, medium, large } = columns;

	return (
		<div
			className="grid__container"
			style={{
				"--columns-small": small,
				"--columns-medium": medium,
				"--columns-large": large,
			}}
		>
			{children}
		</div>
	);
};

Grid.propTypes = IGridPropTypes;

export default React.memo(Grid);
