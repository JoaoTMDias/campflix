import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  position: fixed;
  background-image: linear-gradient(
    to top,
    hsla(15, 40%, 2%, 0),
    hsla(15, 40%, 2%, 0.8)
  );
  top: 0;
  height: var(--header-height, 3rem);
  display: grid;
  grid-template-columns: 6rem minmax(auto, 28rem) 1fr minmax(auto, 300px);
  grid-template-rows: var(--header-height, 3rem);
  grid-column-gap: var(--column-gap, 1.5rem);
  flex-direction: row;
  align-items: center;
  padding-top: 0;
  padding-right: var(--column-gap, 1.5rem);
  padding-bottom: 0;
  padding-left: var(--column-gap, 1.5rem);
  z-index: 1;

  .header {
    &__figure {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    &__logo {
      width: 100%;
      height: 100%;
    }

    &__navigation {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      height: 100%;
    }

    &__list {
      width: 100%;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(3rem, 4rem));
      grid-column-gap: calc(var(--column-gap) * 0.5);
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      list-style-type: none;
      height: 100%;
    }

    &__item {
      width: 100%;
      height: 2rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    &__link {
      text-decoration: none;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--color-link);
      height: 100%;
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      &:hover,
      &:focus {
        color: var(--color-link-active);
      }

      &:focus {
        outline: 1px dashed var(--color-focus-light);
      }

      &--active {
        color: var(--color-link-active);
        text-decoration: dashed;
        text-decoration-line: underline;
      }
    }
  }
`;
