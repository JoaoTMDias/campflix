import { IMoviesResult } from "../../data/services/types";
import * as H from "history";

export interface IRowProps {
    history?: H.History;
    className?: string;
    data?: IMoviesResult[];
    id: string;
    title: string;
}
