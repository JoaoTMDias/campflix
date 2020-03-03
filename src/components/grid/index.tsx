// Libraries
import * as React from "react";
import { GridContainer } from "./styles";

export interface IGridColumns {
    small: number;
    medium: number;
    large: number;
}

export interface IGridProps {
    columns: IGridColumns;
    children: React.ReactNode;
}

/**
 * @description Component Description
 * @author João Dias
 * @date 2019-02-16
 * @returns {React.FunctionComponent<IGridProps>}
 */
const Grid: React.FunctionComponent<IGridProps> = ({
    columns, children
}) => {
    const { small, medium, large } = columns;
    return (
        <GridContainer small={small} medium={medium} large={large}>
            {children}
        </GridContainer>
    );
};

export default React.memo(Grid);
