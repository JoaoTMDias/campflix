import styled from "styled-components";
import { Link } from "react-router-dom";
import { rem } from "polished";

export const Container = styled.div`
  transform: translateY(-3rem);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 1;
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: calc(var(--column-gap, 1.5rem) * 2) var(--column-gap, 1.5rem);

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export const Title = styled.h2`
  width: 100%;
  font-size: ${rem("12px")};
  line-height: 1.25vw;
  margin-bottom: 1rem;
  z-index: 0;

  @media all and (min-width: 50rem) {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

export const Carousel = styled.div`
  width: 100%;
`;

export const CarouselInner = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: var(--column-gap);
  padding: 0;

  @media all and (min-width: ${rem(`960px`)}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media all and (min-width: ${rem(`1288px`)}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media all and (min-width: ${rem(`1616px`)}) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media all and (min-width: ${rem(`2272px`)}) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

export const Item = styled.li`
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  height: ${rem("160px")};
  justify-content: center;
  margin: 0;
  width: 100%;
  z-index: 0;

  @media all and (min-width: 40rem) {
    height: ${rem("180px")};
  }

  @media all and (min-width: 60rem) {
    height: ${rem("220px")};
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
  &:hover,
  &:focus {
    z-index: 1;

    & ~ .section__item {
      z-index: 0;
    }
  }
`;

export const Label = styled(Link)`
  --column-gap: 0.5rem;
  --item-scale: 1.05;
  --item-translate-x: calc(
    var(--carousel-item-max-width) - var(--carousel-item-min-width)
  );
  transform-origin: center center;
  transform: scale(1);
  transition: transform 250ms ease-in-out;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  text-decoration: none;

  &:hover,
  &:focus {
    transform: scale(var(--item-scale));
    outline: 2px solid var(--color-white);
    outline-width: 2px;

    .section__item {
      &__controls,
      &__gradient {
        opacity: 1;
      }
    }
  }
`;

export const Figure = styled.figure`
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--color-background);
  margin: 0;
  padding: 0;
  outline: 2px solid rgba(255, 255, 255, 0);
  transition: outline 250ms ease-in-out;

  .section__item {
    &__gradient {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 80%;
      z-index: 0;
      background-image: linear-gradient(
        to bottom,
        hsla(15, 40%, 2%, 0),
        hsla(15, 40%, 2%, 1)
      );
      opacity: 0;
      transition: opacity 125ms ease-out;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
      z-index: 1;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 1;
  opacity: 0;
  transition: opacity 375ms ease-out;
  padding: 1rem;
  width: 100%;
  height: 100%;
  color: var(--color-white);

  .controls {
    &__icon {
      width: 2rem;
      height: 2rem;
      border-radius: 2rem;
      border: 2px solid var(--color-white);
      background-color: hsla(0, 100%, 100%, 0.24);
      backdrop-filter: blur(2px);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0 0 0.75rem 0;
      padding: 0;
    }

    &__title {
      font-size: ${rem("16px")};
      width: 100%;
      margin-bottom: 0.125rem;
    }

    &__metadata,
    &__tags {
      margin-top: ${rem("4px")};
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: baseline;
      width: 100%;
    }

    &__vote,
    &__duration {
      font-size: ${rem("10px")};
      border-radius:  ${rem("4px")};
    }

    &__vote,
    &__duration,
    &__tags__item {
      padding: ${rem("2px")} 0;
    }

    &__duration {
      background-color: hsla(0, 0%, 100%, 0.24);
      text-transform: uppercase;
      padding: ${rem("2px")} ${rem("8px")};
    }

    &__vote {
      margin-right: 0.5rem;
    }


    &__tags {
      &__item {
        font-size: ${rem("8px")};
        text-transform: uppercase;
        &:after {
          content: "•";
          padding: 0 2px;
          color: var(--color-white);
        }

        &:last-child {
          &:after {
            content: "";
            padding: 0;
          }
        }
      }
    }
  }
`;
