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
    font-size: 1.4vw;
  }
`;

export const Carousel = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 14rem));
  grid-column-gap: var(--column-gap, 1.5rem);
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 1;
`;

export const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  transform-origin: left;
  transition: transform 250ms ease-in-out;
  z-index: 0;

  &:hover,
  &:focus {
    transform: scale(1.2);

    .section__item {
      &__controls {
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 1;
  opacity: 0;
  transition: opacity 375ms ease-out;

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
      font-size: 1rem;
      width: 100%;
      margin-bottom: 0.5rem;
    }
  }
`;
