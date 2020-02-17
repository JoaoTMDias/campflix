import React, { Component } from "react";
import Movies from "../../data/services/movies";
import { Header } from "../../components/header";
import { Hero } from "../../components/hero";
import { Row } from "../../components/row";
import { Container } from "../../components/row/styles";
import { RELATED } from "../../data/related";
import { IMoviesList, IUpcomingMoviesList } from "../../data/services/types";

/**
 *
 *
 * @export
 * @class Homepage
 * @extends {Component}
 */
export class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: {
        top10: null,
        upcoming: null,
        popular: null,
      },
    };
  }

  componentDidMount() {
    this._getData();
  }

  /**
   * Get the Top 10 Movies
   *
   * @returns {Promise<any>}
   * @memberof Homepage
   */
  async _getTop10Movies() {
    try {
      const top10 = await Movies.getTopRated({});

      this.setState(prevState => {
        return {
          ...prevState,
          rows: {
            ...prevState.rows,
            top10,
          },
        };
      });
    } catch (error) {
      console.error("error fetching top 10: ", error);
    }
  }

  /**
   * Get a list of upcoming movies in theatres
   *
   * @memberof Homepage
   */
  async _getUpcoming() {
    try {
      const upcoming = await Movies.getUpcoming({});

      this.setState(prevState => {
        return {
          ...prevState,
          rows: {
            ...prevState.rows,
            upcoming,
          },
        };
      });
    } catch (error) {
      console.error("error fetching top 10: ", error);
    }
  }

  /**
   * Get a list of the current popular movies on TMDb.
   *
   * @memberof Homepage
   */
  async _getPopular() {
    try {
      const popular = await Movies.getPopular({});

      this.setState(prevState => {
        return {
          ...prevState,
          rows: {
            ...prevState.rows,
            popular,
          },
        };
      });
    } catch (error) {
      console.error("error fetching top 10: ", error);
    }
  }

  /**
   * Checks if a type of data exists
   *
   * @param {IMoviesList | IUpcomingMoviesList | null} data
   * @returns {boolean}
   * @memberof Homepage
   */
  _hasData(data) {
    return data && Object.keys(data).length > 0;
  }

  /**
   * Fetches all the necessary data
   *
   * @memberof Homepage
   */
  _getData() {
    this._getTop10Movies();
    this._getUpcoming();
    this._getPopular();
  }

  /**
   * Renders the top 10 list
   *
   * @param {IMoviesList | null} data
   * @memberof Homepage
   */
  renderTop10(data) {
    if (this._hasData(data)) {
      const { history } = this.props;

      return (
        <Row
          id="top-10-movies"
          title="Top 10 Movies"
          data={RELATED.data}
          history={history}
        />
      );
    }

    return <p>...</p>;
  }

  render() {
    const { rows } = this.state;
    return (
      <div className="layout">
        <Header />
        <main>
          <Hero />
          <Container>{this.renderTop10(rows.top10)}</Container>
        </main>
      </div>
    );
  }
}

export default Homepage;
