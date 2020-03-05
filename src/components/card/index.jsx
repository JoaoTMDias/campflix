import React from "react";
import { Article, CardTitle } from "./styles";
import "./types.d";

/**
 * Card Component
 *
 * @param {ICardProps} { id }
 * @extends {React.FunctionComponent<ICardProps>}
 * @returns
 */
export const Card = ({ id, title, children }) => {
  const titleId = `${id}-title`;
  return (
    <Article
      id={id}
      className="card"
      data-testid="card"
      aria-describedby={titleId}
    >
      <CardTitle id={titleId} className="card__title" data-testid="card-title">
        {title}
      </CardTitle>
      {children}
    </Article>
  );
};

export default Card;
