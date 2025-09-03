import styled from "styled-components";

const Container = styled.li`
  padding: 54px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #676767;
  border-radius: 85px;
  transition: 0.3s;
  gap: 15px;
  & img {
    filter: grayscale(1);
  }
  &:hover {
    border-color: #28e98c;
    & img {
      filter: none;
    }
  }
`;
const Icon = styled.img`
  width: 75px;
  height: 75px;
`;
const Title = styled.h4`
  font-size: 16px;
`;

export { Container, Icon, Title };
