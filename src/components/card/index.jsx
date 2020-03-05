import React from "react";
import { Article, CardTitle } from "./styles";
import { PropTypes, ICardProps } from "./types.d";

/**
 * Card Component
 *
 * @returns {React.FunctionComponent<ICardProps>}
 */
export const Card = ({ id, title, children }) => {
	const titleId = `${id}-title`;

	return (
		<Article id={id} className="card" data-testid="card" aria-describedby={titleId}>
			<CardTitle id={titleId} className="card__title" data-testid="card-title">
				{title}
			</CardTitle>
			{children}
		</Article>
	);
};

Card.propTypes = PropTypes;

export default Card;
