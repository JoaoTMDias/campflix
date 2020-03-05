import React, { Component } from "react";
import Movies from "../../data/services/movies";
import { Header } from "../../components/header";
import { Hero } from "../../components/hero";
import { Row } from "../../components/row";
import { Container } from "../../components/row/styles";
import { IMoviesResult } from "../../data/services/service-types.d";
import { IHomepageProps, IHomepageState } from "./types.d";

/**
 * Home page
 *
 * @class Homepage
 * @extends {React.Component<IHomepageProps, IHomepageState>}
 */
export class Homepage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			top10: null,
			upcoming: null,
			popular: null,
		};
	}

	componentDidMount() {
		this._getData();
	}

	/**
	 * Get the Top 10 Movies
	 *
	 * @memberof Homepage
	 */
	async _getTop10Movies() {
		try {
			const results = await Movies.getTopRated({});
			const top10 = await results.data;

			this.setState({ top10 });
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
			const results = await Movies.getUpcoming({});
			const upcoming = results.data;

			this.setState({
				upcoming,
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
			const results = await Movies.getPopular({});
			const popular = await results.data;

			this.setState({
				popular,
			});
		} catch (error) {
			console.error("error fetching top 10: ", error);
		}
	}

	/**
	 * Checks if a type of data exists
	 *
	 * @param {IMoviesResult[]} data
	 * @returns {boolean}
	 * @memberof Homepage
	 */
	_hasResults(data) {
		return data.length > 0;
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
	 * @param {IMoviesResult[] | null} data
	 * @param {string} id
	 * @param {string} title
	 * @returns {JSX.Element}
	 * @memberof Homepage
	 */
	renderRow(data, id, title) {
		if (data && this._hasResults(data)) {
			const { history } = this.props;

			return <Row id={id} title={title} data={data} history={history} />;
		}

		return <p>...</p>;
	}

	render() {
		const { top10, upcoming, popular } = this.state;

		return (
			<div className="layout">
				<Header />
				<main>
					<Hero />
					<Container>
						{top10 &&
							this.renderRow(
								top10.results,
								"0892fa04-3824-41a8-b64b-1cbad8cff026",
								"🎖 Great and Magestical"
							)}
						{popular &&
							this.renderRow(
								popular.results,
								"4b26bd5c-a08c-44d0-b076-aa57b8f6003a",
								"🔥 So hot right now"
							)}
						{upcoming &&
							this.renderRow(upcoming.results, "35d7b358-b39d-4f11-91b9-24431ed66409", "🎬 Coming next")}
					</Container>
				</main>
			</div>
		);
	}
}

export default Homepage;
