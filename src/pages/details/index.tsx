import React, { Component } from "react";
import Movies from "../../data/services/movies";
import { Header } from "../../components/header";
import { DetailsHero } from "../../components/hero/details-hero";
import { Container } from "../../components/row/styles";
import { IMovieDetails } from "../../data/services/types";
import { IDetailsPageProps, IDetailsPageState } from "./types";

/**
 * Details Page
 *
 * @export
 * @class DetailsPage
 * @extends {Component<IDetailsPageProps, IDetailsPageState>}
 */
export class DetailsPage extends Component<IDetailsPageProps, IDetailsPageState>{
  constructor (props: IDetailsPageProps) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    this._getData();
  }

  /**
   * Get the Movie details
   *
   * @returns {Promise<any>}
   * @param {string} movie_id
   * @memberof DetailsPage
   */
  async _getMovieDetails(movie_id: string) {
    try {
      const results = await Movies.getMovieDetails({
        movie_id,
      });

      const { data } = await results;

      this.setState(prevState => {
        return {
          ...prevState,
          data,
        };
      });
    } catch (error) {
      console.error("error fetching movie details: ", error);
    }
  }

  /**
   * Checks if a type of data exists
   *
   * @param {IMovieDetails | null} data
   * @returns {boolean}
   * @memberof DetailsPage
   */
  _hasData(data: IMovieDetails | null) {
    return data && Object.keys(data).length > 0;
  }

  /**
   * Fetches all the necessary data
   *
   * @memberof DetailsPage
   */
  _getData() {
    const { match } = this.props;

    if (match && match.params) {
      const id = match.params.id;

      this._getMovieDetails(id);
    }
  }

  render() {
    const { data } = this.state;

    if (data) {
      return (
        <div className="layout">
          <Header />
          <main>
            <DetailsHero {...data} />
            <Container>
              <p className="overview">
                {data.overview}
              </p>
            </Container>
          </main>
        </div>
      );
    }

    return <p>...</p>
  }
}

export default DetailsPage;
