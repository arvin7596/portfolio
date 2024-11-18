import styled from "styled-components";

const Container = styled.div`
  padding: ${(props) => (props.animationVariants ? "90px 0" : 0)};
`;

export { Container };
