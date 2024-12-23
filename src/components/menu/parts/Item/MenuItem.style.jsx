import styled from "styled-components";

const Container = styled.li`
  text-align: center;
  color: #999999;
  transition: 0.3s;
  :hover {
    color: var(--color-primary);
    cursor: pointer;
  }
  .active {
    color: var(--color-primary);
    transition: all 0.3s ease-in-out;
  }
`;

export { Container };
