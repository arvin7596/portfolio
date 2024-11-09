import styled from "styled-components";

const Container = styled.div`
  flex-direction: row;
  justify-content: center;
  padding: 8px;
  object-fit: cover;
  margin-bottom: 32px;
`;

const Image = styled.img`
  width: 230px;
  height: 230px;
  object-fit: cover;
  border-radius: 20px;
`;

export {
  Container,
  Image
};
