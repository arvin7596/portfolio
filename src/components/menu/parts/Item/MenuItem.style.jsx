import styled from "styled-components";

const Container = styled.li`
  text-align: center;
  color: #999999;
  transition: all 0.3s ease-in-out;
  font-size: 18px;

  :hover {
    color: var(--color-primary);
    cursor: pointer;
  }

  /* Active state styling */
  &.active {
    color: var(--color-primary);
  }

  &.active svg {
    color: var(--color-primary);
  }

  /* Ensure smooth transitions for all color changes */
  svg {
    transition: all 0.3s ease-in-out;
  }
`;

export { Container };
