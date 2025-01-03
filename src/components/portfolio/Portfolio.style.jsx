import styled from "styled-components";

export const Container = styled.section`
  text-align: center;
  padding: 4rem 0;
`;

export const ProjectList = styled.div`
  display: grid;
  grid-template-columns: ${({ isPrimary }) => (isPrimary ? "1fr" : "1fr 1fr")};
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 0 2rem;
`;
