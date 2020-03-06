/* eslint-disable no-unused-vars */
import React from "react";
import { ICardProps, ICardPropTypes } from "./types.d";

/**
 * Card Component
 *
 * @returns {React.FunctionComponent<ICardProps>}
 */
export const Card = ({ id, title, children }) => {
	const titleId = `${id}-title`;

	return (
		<article id={id} className="card" data-testid="card" aria-describedby={titleId}>
			<h3 id={titleId} className="card__title" data-testid="card-title">
				{title}
			</h3>
			{children}
		</article>
	);
};

Card.propTypes = ICardPropTypes;

export default Card;
