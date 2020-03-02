import React from "react";
import { Container } from "./styles";
import { IMovieDetails } from "../../data/services/types";
import { getGenreName } from "../../helpers";

const URL = "https://image.tmdb.org/t/p"

const QUALITY = {
  poster: {
    default: `${URL}/w185`,
    high: `${URL}/w342`
  },
  background: {
    default: `${URL}/w1280`,
    high: `${URL}/original`
  }
};

/**
 * Details Hero component
 *
 * @param {IMovieDetails} props
 * @returns {JSX.Element}
 */
export const DetailsHero: React.FunctionComponent<IMovieDetails> = ({
  title,
  poster_path,
  backdrop_path,
  release_date,
  runtime,
  original_language,
  genres

}) => {
  const poster_src = {
    src: `${QUALITY.poster.default}${poster_path}`,
    srcSet: `${QUALITY.poster.default}${poster_path} 1x, ${QUALITY.poster.high}${poster_path} 2x`,
  };

  const backdrop_src = {
    src: `${QUALITY.background.default}${backdrop_path}`,
    srcSet: `${QUALITY.background.default}${backdrop_path} 1x, ${QUALITY.background.high}${backdrop_path} 2x`,
  };

  const year = release_date.substr(0, 4);

  /**
   * Renders a list of tags
   * @param {number[]} tags
   */
  function renderTags() {
    const list = genres.map((genre, index) => {
      const name = getGenreName(genre.id);
      return (
        <span key={index} className="controls__tags__item">
          {name}
        </span>
      );
    });

    return <div className="controls__tags">{list}</div>;
  }

  return (
    <Container id="details-hero" className="hero">
      <div className="hero__content hero__content--horizontal">
        <figure className="hero__poster">
          <img
            {...poster_src}
            width="185"
            alt={`Poster for ${title}`}
          />
        </figure>
        <div className="hero__metadata">
          <h3 className="hero__metadata__title">{`${title} (${year})`}</h3>
          <p className="hero__metadata__language">{original_language}</p>
          <p className="hero__metadata__runtime">{`${runtime} minutes`}</p>
          {genres && renderTags()}
        </div>
      </div>
      <div role="presentation" className="hero__gradient" />
      <img
        {...backdrop_src}
        role="presentation"
        width={2048}
        height={1152}
        loading="lazy"
        className="hero__background"
        alt="The witcher background"
      />
    </Container>
  );
};

export default DetailsHero;
