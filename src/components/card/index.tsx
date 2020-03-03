import React from 'react';
import { Article, CardTitle } from "./styles";

interface ICardProps {
    id: string;
    title: string;
}

/**
 *
 *
 * @param {ICardProps} { id }
 * @returns
 */
export const Card: React.FunctionComponent<ICardProps> = ({ id, title, children }) => {
    const titleId = `${id}-title`;
    return (
        <Article id={id} className="card" data-testid="card" aria-describedby={titleId}>
            <CardTitle id={titleId} className="card__title" data-testid="card-title">{title}</CardTitle>
            {children}
        </Article>
    );
}

export default Card;
