import * as H from "history";
import { IUpcomingMoviesList, IMoviesList } from "../../data/services/types";

export interface IHomepageProps {
    history: H.History;
}

export interface IHomepageState {
    top10: IMoviesList | null;
    upcoming: IUpcomingMoviesList | null;
    popular: IMoviesList | null;
}
