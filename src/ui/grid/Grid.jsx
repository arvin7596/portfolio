import styled, { css } from "styled-components";

const breakpoints = { sm: 576, md: 768, lg: 992, xl: 1200 };

const span = (n) =>
  n
    ? css`
        grid-column: span ${n};
      `
    : "";

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${({ gap = 16 }) => `${gap}px`};
`;

export const Col = styled.div`
  ${(props) => span(props.xs || 12)}

  @media (min-width: ${breakpoints.sm}px) {
    ${(props) => span(props.sm)}
  }
  @media (min-width: ${breakpoints.md}px) {
    ${(props) => span(props.md)}
  }
  @media (min-width: ${breakpoints.lg}px) {
    ${(props) => span(props.lg)}
  }
  @media (min-width: ${breakpoints.xl}px) {
    ${(props) => span(props.xl)}
  }
`;
