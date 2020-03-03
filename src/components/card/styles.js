import styled from "styled-components";

export const Article = styled.article`
  width: 100%;
  background-color: hsl(0, 0%, 100%, 0.1);
  border-radius: var(--global-margin);
  margin: calc(var(--global-margin) * 2) auto;
  padding: var(--global-margin);
  box-shadow: 0 14px 28px hsla(15, 40%, 2%, .12), 0 8px 8px hsla(15, 40%, 2%, .24);

  @media all and (min-width: 48rem) {
    padding-top: var(--global-margin);
    padding-right: calc(var(--global-margin) * 2);
    padding-bottom: var(--global-margin);
    padding-left: calc(var(--global-margin) * 2);
  }

  @media all and (min-width: 64rem) {
    padding: calc(var(--global-margin) * 2);
  }
`;

export const CardTitle = styled.h3`
    font-size: calc(1rem * 0.75);
    text-transform: uppercase;
    color: hsla(0, 0%, 100%, 0.4);
`;
