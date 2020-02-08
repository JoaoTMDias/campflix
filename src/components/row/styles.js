import styled from "styled-components";
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
  padding-top: 0;
  padding-right: var(--column-gap, 1.5rem);
  padding-bottom: 0;
  padding-left: var(--column-gap, 1.5rem);
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
  overflow: scroll;
  width: 100%;
  margin-top: calc(var(--column-gap, 1.5rem) * 2.5 * -1);
`;

export const CarouselInner = styled.ul`
  margin: calc(var(--column-gap, 1.5rem) * 3) 0;
  padding: 0;
  scroll-snap-type: x proximity;
  white-space: nowrap;
`;

export const Item = styled.li`
  --column-gap: 0.5rem;
  --item-scale: 1.4;
  --item-translate-x: calc(
    var(--carousel-item-max-width) - var(--carousel-item-min-width)
  );
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  height: ${rem("160px")};
  justify-content: center;
  margin: 0 var(--column-gap, 1.5rem);
  scroll-snap-align: start;
  transform-origin: center left;
  transform: scale(1);
  transition: transform 250ms ease-in-out;
  width: var(--carousel-item-max-width);
  z-index: 0;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover,
  &:focus {
    transform: scale(var(--item-scale));

    & ~ .section__item {
      transform: translate3d(var(--item-translate-x), 0, 0);
    }

    .section__item {
      &__figure {
        outline: 2px solid rgba(255, 255, 255, 0.1);
      }

      &__controls,
      &__gradient {
        opacity: 1;
      }
    }
  }
`;

export const Label = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
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
      height: 50%;
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
  padding: 0.5rem 1rem;
  width: 100%;
  height: 100%;

  .controls {
    &__icon {
      width: 2rem;
      height: 2rem;
      border-radius: 2rem;
      border: 2px solid var(--color-white);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin: 0 0 0.75rem 0;
      padding: 0;
    }

    &__title {
      font-size: 0.85rem;
      width: 100%;
      margin-bottom: 0.125rem;
    }

    &__metadata,
    &__tags {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: baseline;
      width: 100%;
    }

    &__age,
    &__duration {
      font-size: ${rem("12px")};
    }

    &__age {
      margin-right: 0.5rem;
    }

    &__tags {
      &__item {
        font-size: ${rem("8px")};
        text-transform: uppercase;
        &:after {
          content: "•";
          padding: 0 2px;
          opacity: 0.2;
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
