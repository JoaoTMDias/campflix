/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { KEYCODES, getGenreName } from "../../helpers";
import { MOVIE_DETAILS } from "../../constants/index";
import { IMoviesResult } from "../../data/services/types.d";
import { IRowProps, IRowPropTypes } from "./types.d";

/**
 * Movies Row
 *
 * @class Row
 * @extends {React.Component<IRowProps, any>}
 */
export class Row extends Component {
	static propTypes = IRowPropTypes;

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
	 * Returns the items of the carousel
	 *
	 * @param {IMoviesResult} item
	 * @returns {JSX.Element}
	 */
	getCarouselItems(item) {
		const { backdrop_path, genre_ids, id, original_language, overview, title, vote_average } = item;

		const image = {
			src: `https://image.tmdb.org/t/p/w342/${backdrop_path}`,
			srcSet: `https://image.tmdb.org/t/p/w342/${backdrop_path} 1x, https://image.tmdb.org/t/p/w780/${backdrop_path} 2x`,
		};

		const to = `${MOVIE_DETAILS}/${id}`;

		return (
			<li key={id} className="section__item">
				<Link to={to} title={title} className="section__item__link">
					<figure className="section__item__figure">
						<div className="section__item__gradient" role="presentation" />
						<img {...image} alt={overview} loading="lazy" className="section__item__image" />
					</figure>
					<div className="controls">
						<figure className="controls__icon">
							<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
								<path fill="var(--color-primary)" d="M16 10v28l22-14z" />
							</svg>
						</figure>
						<h4 className="controls__title">{title}</h4>
						<div className="controls__metadata">
							<span className="controls__vote">{`${vote_average}/10`}</span>
							<span className="controls__duration">{original_language}</span>
						</div>
						{genre_ids && this.renderTags(genre_ids)}
					</div>
				</Link>
			</li>
		);
	}

	/**
	 * Renders a list of tags
	 *
	 * @param {number[]} tags
	 * @returns {JSX.Element}
	 */
	renderTags(tags) {
		const list = tags?.map((tag, index) => {
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
	 * Renders the carousel of videos
	 *
	 * @returns {JSX.Element}
	 */
	renderCarousel() {
		const { data } = this.props;

		if (data?.length > 0) {
			const list = data.map(item => this.getCarouselItems(item));

			return (
				<div id="section-carousel" className="carousel">
					<ul className="carousel__inner">{list}</ul>
				</div>
			);
		}

		return <p>...loading</p>;
	}

	render() {
		const { id, className, title } = this.props;
		const classes = `section ${className}`;

		return (
			<section id={id} className={classes}>
				<h2 className="section__title">{title}</h2>
				{this.renderCarousel()}
			</section>
		);
	}
}

export default Row;
