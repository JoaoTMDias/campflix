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
  tagline,
  poster_path,
  backdrop_path,
  release_date,
  runtime,
  original_language,
  genres,
  production_companies

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
  function _renderTags() {
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

  /**
   * Renders a list of production companies logos
   */
  function _renderProductionCompanies() {
    const list = production_companies.map((company) => {
      if (company.logo_path) {
        return (
          <img
            key={company.id}
            src={`${URL}/w92${company.logo_path}`}
            width={92}
            className="hero__company"
            loading="lazy"
            alt={company.name}
          />
        );
      }

      return null;
    });

    return <div className="hero__metadata__row">{list}</div>;
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
          <blockquote className="hero__metadata__tagline">&#8220;{tagline}&rdquo;</blockquote>
          {production_companies && _renderProductionCompanies()}
          <div className="hero__metadata__row">
            <p className="hero__metadata__language">{original_language}</p>
            <p className="hero__metadata__runtime">{`${runtime} minutes`}</p>
          </div>
          {genres && _renderTags()}
        </div>
      </div>
      <div role="presentation" className="hero__gradient" />
      <img
        {...backdrop_src}
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
