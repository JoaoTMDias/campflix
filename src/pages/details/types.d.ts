import { IMovieDetails } from "../../data/services/types";
import { RouteComponentProps } from "react-router-dom";


export interface IDetailsPageProps extends RouteComponentProps<{
    id: string
}> {

}

export interface IDetailsPageState {
    data: IMovieDetails | null;
}
