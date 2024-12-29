import styled from "styled-components";

const StyledButton = styled.button`
  background: var(--color-primary);
  color: var(--color-black-900);
  text-align: center;
  padding: 11px 58px 10px 58px;
  border-radius: 30px;
  text-transform: uppercase;
  transition: 0.3s;
  cursor: pointer;
  border: 2px solid var(--color-primary);
  &:hover {
    color: var(--color-primary);
    background: none;
    transition: 0.3s;
  }
`;

export { StyledButton };
