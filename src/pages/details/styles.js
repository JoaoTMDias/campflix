import styled from "styled-components";

export const Figure = styled.h4`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &:last-child {
    margin-bottom: 0;
  }

  .details__figure {
    &__title {
      font-size: 0.625rem;
      text-transform: uppercase;
    }
  }
`;
