import React, { Component } from "react";
import Movies from "../../data/services/movies";
import { Header } from "../../components/header";
import { DetailsHero } from "../../components/hero/details-hero";
import { Container, Section } from "../../components/row/styles";
import Card from "../../components/card";
import Grid, { IGridColumns } from "../../components/grid";
import { IMovieDetails } from "../../data/services/types";
import { IDetailsPageProps, IDetailsPageState } from "./types";
import { Figure } from "./styles";

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
      const gridColumns: IGridColumns = {
        small: 1,
        medium: 2,
        large: 3
      }
      return (
        <div className="layout">
          <Header />
          <main>
            <DetailsHero {...data} />
            <Container>
              <Section id="details-content">
                <Grid columns={gridColumns}>
                  <Card id="overview" title="Description">
                    <p className="overview">
                      {data.overview}
                    </p>
                  </Card>
                  <Card id="important-figures" title="Important Figures">
                    <Figure className="details__figure">
                      <span className="details__figure__title">Budget: </span>
                      <span className="details__figure__value">{`$ ${data.budget}`}</span>
                    </Figure>
                    <Figure className="details__figure">
                      <span className="details__figure__title">Revenue: </span>
                      <span className="details__figure__value">{`$ ${data.revenue}`}</span>
                    </Figure>
                  </Card>
                  <Card id="popularity" title="Popularity">
                    <Figure className="details__figure">
                      <span className="details__figure__title">Votes: </span>
                      <span className="details__figure__value">{data.vote_count}</span>
                    </Figure>
                    <Figure className="details__figure">
                      <span className="details__figure__title">Popularity: </span>
                      <span className="details__figure__value">{data.popularity} <span role="img" aria-label="Thumbs up emoji"> 👍</span></span>
                    </Figure>
                  </Card>
                </Grid>
              </Section>
            </Container>
          </main>
        </div>
      );
    }

    return <p>...</p>
  }
}

export default DetailsPage;
