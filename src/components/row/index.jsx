import React, { Component } from "react";
import { KEYCODES, getGenreName } from "../../helpers";
import PropTypes from "prop-types";
import {
  Title,
  Carousel,
  CarouselInner,
  Section,
  Item,
  Label,
  Controls,
  Figure,
} from "./styles";
import { history } from "../../data/react-router.d";
import { MOVIE_DETAILS } from "../../constants/index";
import { IRowProps } from "./types-row.d";
import { IMoviesResult } from "../../data/services/service-types.d";

/**
 * Movies Row
 *
 * @class Row
 * @extends {React.Component<IRowProps, any>}
 */
export class Row extends Component {
  /**
   * Renders a list of tags
   * @param {number[]} tags
   */
  renderTags(tags) {
    const list = tags.map((tag, index) => {
      const name = getGenreName(tag);
      return (
        <span key={index} className="controls__tags__item">
          {name}
        </span>
      );
    });

    return <div className="controls__tags">{list}</div>;
  }

  /**
   * Handles the click on Input
   *
   * @param {React.MouseEvent<HTMLInputElement, MouseEvent>} event
   * @param {string} to
   * @memberof Row
   */
  _onClickOnInput(event, to) {
    event.preventDefault();

    this._navigateToPage(to);
  }

  /**
   * Handles the key press on Input
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} event
   * @param {string} to
   * @memberof Row
   */
  _onKeyUpOnInput(event, to) {
    switch (event.keyCode) {
      case KEYCODES.ENTER:
      case KEYCODES.SPACE:
        this._navigateToPage(to);
        break;

      case KEYCODES.ARROW_LEFT:
      case KEYCODES.ARROW_RIGHT:
      default:
        break;
    }
  }

  /**
   * Navigate to another page
   *
   * @param {string} to
   * @memberof Row
   */
  _navigateToPage(to) {
    const { history } = this.props;

    if (history) {
      history.push(to);
    }
  }

  /**
   *
   * @param {IMoviesResult} item
   */
  getCarouselItems(item) {
    const {
      backdrop_path,
      genre_ids,
      id,
      original_language,
      overview,
      title,
      vote_average,
    } = item;

    const image = {
      src: `https://image.tmdb.org/t/p/w342/${backdrop_path}`,
      srcSet: `https://image.tmdb.org/t/p/w342/${backdrop_path} 1x, https://image.tmdb.org/t/p/w780/${backdrop_path} 2x`,
    };

    const to = `${MOVIE_DETAILS}/${id}`;

    return (
      <Item key={id} className="section__item">
        <Label to={to} title={title} className="section__item__link">
          <Figure className="section__item__figure">
            <div className="section__item__gradient" />
            <img
              {...image}
              alt={overview}
              loading="lazy"
              className="section__item__image"
            />
          </Figure>
          <Controls className="section__item__controls">
            <figure className="controls__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <path fill="var(--color-primary)" d="M16 10v28l22-14z" />
              </svg>
            </figure>
            <h4 className="controls__title">{title}</h4>
            <div className="controls__metadata">
              <span className="controls__vote">{`${vote_average}/10`}</span>
              <span className="controls__duration">{original_language}</span>
            </div>
            {genre_ids && this.renderTags(genre_ids)}
          </Controls>
        </Label>
      </Item>
    );
  }

  /**
   * Renders the carousel of videos
   *
   * @returns {JSX.Element}
   */
  renderCarousel() {
    const { data } = this.props;
    const hasResults = data?.length > 0;

    if (hasResults) {
      const list = data.map(item => this.getCarouselItems(item));

      return (
        <Carousel id="section-carousel">
          <CarouselInner className="section__carousel">{list}</CarouselInner>
        </Carousel>
      );
    }

    return <p>...loading</p>;
  }

  render() {
    const { id, className, title } = this.props;

    return (
      <Section id={id} className={className}>
        <Title className="section__title">{title}</Title>
        {this.renderCarousel()}
      </Section>
    );
  }
}

Row.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    page: PropTypes.number,
    total_results: PropTypes.number,
    total_pages: PropTypes.number,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        popularity: PropTypes.number,
        vote_count: PropTypes.number,
        video: PropTypes.bool,
        poster_path: PropTypes.string,
        id: PropTypes.number,
        adult: PropTypes.bool,
        backdrop_path: PropTypes.string,
        original_language: PropTypes.string,
        original_title: PropTypes.string,
        genre_ids: PropTypes.arrayOf(PropTypes.number),
        title: PropTypes.string,
        vote_average: PropTypes.number,
        overview: PropTypes.string,
        release_date: PropTypes.string,
      })
    ),
    dates: PropTypes.shape({
      minimum: PropTypes.string,
      maximum: PropTypes.string,
    }),
  }),
  history: history,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Row;
