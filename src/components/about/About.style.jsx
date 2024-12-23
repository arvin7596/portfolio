import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Description = styled.p`
  font-size: 16px;
  line-height: 30px;
  text-align: start;
  color: var(--color-grey-500);
  margin-bottom: 30px;
`;

export { Container, Description };
