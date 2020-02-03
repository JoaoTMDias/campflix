import React, { Component } from "react";
import { Link } from "react-router-dom";

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
   *
   * @param {*} item
   * @param {*} index
   */
  getCarouselItems(item, index) {
    const { id, name, to, title, age, duration, tags } = item;

    return (
      <li key={id} className="section__item" style={{ "--order": `${index}` }}>
        <label htmlFor={id}>
          <input
            type="radio"
            id={id}
            name={name}
            className="section__item__input"
            value=""
          />
          <Link to={to} className="section__item__controls">
            <figure className="controls__icon" />
            <h4 className="controls__title">{title}</h4>
            <div className="controls__metadata">
              <span className="controls__age">{age}</span>
              <span className="controls__duration">{duration}</span>
            </div>
            {this.renderTags(tags)}
          </Link>
        </label>
      </li>
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

      return <ul className="section__carousel">{list}</ul>;
    }

    return <p>...loading</p>;
  }

  render() {
    const { id, className, title } = this.props;

    console.log("history: ", this.props);

    return (
      <section id={id} className={className}>
        <h2 className="section__title">{title}</h2>
        {this.renderCarousel()}
      </section>
    );
  }
}

export default Row;
