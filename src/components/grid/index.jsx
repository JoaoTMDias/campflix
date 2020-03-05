// Libraries
import * as React from "react";
import { GridContainer } from "./styles";
import "./types.d";

/**
 * Grid component
 *
 * @author João Dias
 * @returns {React.FunctionComponent<IGridProps>}
 */
const Grid = ({ columns, children }) => {
	const { small, medium, large } = columns;

	return (
		<GridContainer small={small} medium={medium} large={large}>
			{children}
		</GridContainer>
	);
};

export default React.memo(Grid);
