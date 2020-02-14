import React, { Component } from "react";
import { KEYCODES } from "../../helpers";
import * as PropTypes from "prop-types";
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

/**
 * Movies Row
 *
 * @export
 * @class Row
 * @extends {Component}
 */
export class Row extends Component {
  /**
   * Renders a list of tags
   * @param {string[]} tags
   */
  renderTags(tags) {
    const list = tags.map((tag, index) => {
      return (
        <span key={index} className="controls__tags__item">
          {tag}
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
   * @param {*} item
   * @param {*} index
   */
  getCarouselItems(item, index) {
    const { id, name, to, title, background, age, duration, tags } = item;

    return (
      <Item
        key={id}
        className="section__item"
      >
        <Label to={to} title={title} className="section__item__link">
          <Figure className="section__item__figure">
            <div className="section__item__gradient" />
            <img
              src={background.src}
              alt={background.alt}
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
              <span className="controls__age">{age}</span>
              <span className="controls__duration">{duration}</span>
            </div>
            {this.renderTags(tags)}
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

    if (data) {
      const list = data.map((item, index) =>
        this.getCarouselItems(item, index)
      );

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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      to: PropTypes.string,
      title: PropTypes.string,
      background: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }),
      age: PropTypes.string,
      duration: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  history: history.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Row;
