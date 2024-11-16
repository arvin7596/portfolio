import styled from "styled-components";

const Container = styled.a`
  text-align: center;
  color: #999999;
  transition: 0.3s;
  :hover {
    color: #28e98c;
    cursor: pointer;
  }
  /* &[data-is-selected="true"] {
    color: #28e98c;
  } */
`;

export { Container };
