import { IMovieData } from "../../data/services/types";
import * as H from "history";

export interface IRowProps {
    history: H.History;
    className?: string;
    data?: IMovieData;
    id: string;
    title: string;
}
