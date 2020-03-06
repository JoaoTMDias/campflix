/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Movies from "../../data/services/movies";
import { Header } from "../../components/header";
import { DetailsHero } from "../../components/hero/details-hero";
import Card from "../../components/card";
import Grid from "../../components/grid";
import { IDetailsPageProps, IDetailsPageState, PropTypes } from "./types.d";
import "../../data/services/types.d";

/**
 * Details Page
 *
 * @class DetailsPage
 * @extends {React.Component<IDetailsPageProps, IDetailsPageState>}
 */
export class DetailsPage extends Component {
	static propTypes = PropTypes;

	constructor(props) {
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
	async _getMovieDetails(movie_id) {
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
	_hasData(data) {
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

		if (this._hasData(data)) {
			const gridColumns = {
				small: 1,
				medium: 2,
				large: 3,
			};

			return (
				<div className="layout">
					<Header />
					<main>
						<DetailsHero {...data} />
						<div className="row__container">
							<section id="details-content" className="section">
								<Grid columns={gridColumns}>
									<Card id="overview" title="Description">
										<p className="overview">{data.overview}</p>
									</Card>
									<Card id="important-figures" title="Important Figures">
										<h4 className="details__figure">
											<span className="details__figure__title">Budget: </span>
											<span className="details__figure__value">{`$ ${data.budget}`}</span>
										</h4>
										<h4 className="details__figure">
											<span className="details__figure__title">Revenue: </span>
											<span className="details__figure__value">{`$ ${data.revenue}`}</span>
										</h4>
									</Card>
									<Card id="popularity" title="Popularity">
										<h4 className="details__figure">
											<span className="details__figure__title">Votes: </span>
											<span className="details__figure__value">{data.vote_count}</span>
										</h4>
										<h4 className="details__figure">
											<span className="details__figure__title">Popularity: </span>
											<span className="details__figure__value">
												{data.popularity}{" "}
												<span role="img" aria-label="Thumbs up emoji">
													{" "}
													👍
												</span>
											</span>
										</h4>
									</Card>
								</Grid>
							</section>
						</div>
					</main>
				</div>
			);
		}

		return <p>...</p>;
	}
}

export default DetailsPage;
