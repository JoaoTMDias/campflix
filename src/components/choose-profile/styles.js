import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.article`
  width: 100%;
  height: calc(100vh - var(--header-height));
  padding: 0 var(--global-padding);
  background: var(--color-black);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .choose-profile {
    &__buttons {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: var(--column-gap);
      justify-content: center;
      width: 100%;
      margin: 0;
      padding: 0;
      flex-direction: row;

      @media all and (min-width: 50rem) {
        grid-template-columns: repeat(4, 1fr);
      }
    }

    &__content {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: flex-start;
      margin: 0 var(--global-margin);
    }
  }
`;

const FADE_IN_UP = keyframes`
  from {
    transform: translateY(3rem);
    opacity: 0.01;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Anchor = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  --order: 0;
  animation-name: ${FADE_IN_UP};
  opacity: 0;
  animation-delay: calc(96ms * (var(--length) - (var(--order) + 1)));
  animation-duration: 300ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;

  .profile-link {
    &__figure {
      height: 10vw;
      width: 10vw;
      max-height: 200px;
      max-width: 200px;
      min-height: 84px;
      min-width: 84px;
      transform: scale(1);
      transition: transform 200ms ease-in;
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }

    &__name {
      font-size: 0.75rem;
      color: #767676;

      @media all and (min-width: 50rem) {
        font-size: 1.25rem;
      }

      @media all and (min-width: 87.5) {
        font-size: 1.5rem;
      }
    }
  }

  &:hover,
  &:focus {
    outline: 2px dashed var(--color-outline);

    .profile-link {
      &__figure {
        outline: 2px solid var(--color-white);
        transform: scale(1.1);
      }

      &__name {
        color: var(--color-white);
      }
    }
  }
`;
