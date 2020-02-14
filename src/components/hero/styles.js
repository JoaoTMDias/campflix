import styled from "styled-components";
import { rem } from "polished";

export const Container = styled.article`
  width: 100%;
  height: 70vh;
  max-height: ${rem("800px")};
  padding: 0 var(--global-padding);
  background: var(--color-black);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  z-index: 0;

  .hero {
    &__content,
    &__buttons,
    &__button,
    &__button__icon,
    &__button__title {
      display: flex;
      align-items: center;
    }

    &__content {
      flex-direction: column;
      z-index: 2;
      margin-bottom: calc(var(--global-margin) * 6);
    }

    &__content,
    &__buttons,
    &__button__title {
      justify-content: flex-start;
    }

    &__buttons {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: var(--column-gap);
      width: 100%;
    }

    &__buttons,
    &__button {
      flex-direction: row;
    }

    &__button {
      background-color: hsla(360, 33%, 99%, 0.1);
      justify-content: center;
      color: var(--color-white);
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      border: none;
      transform: scale(1);
      transition: transform 200ms ease-in-out;

      &__icon {
        width: 1.5rem;
        height: 1.5rem;
        justify-content: center;
        margin: 0 1rem 0 0;
        padding: 0;
      }

      &__title {
        font-size: 1.5rem;
        font-weight: bold;
        -webkit-font-smoothing: antialiased;
        white-space: nowrap;
        margin: 0;
        padding: 0;
      }

      &:hover,
      &:focus {
        background-color: var(--color-white);
        color: var(--color-black);
        transform: scale(1.1);
      }

      &:focus {
        outline: 1px dashed var(--color-focus-light);
        outline-offset: 4px;
      }
    }

    &__background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      object-fit: cover;
      object-position: center;
    }

    &__gradient {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 70%;
      z-index: 1;
      background-image: linear-gradient(
        to bottom,
        hsla(15, 40%, 2%, 0),
        hsla(15, 40%, 2%, 1)
      );
    }
  }
`;
