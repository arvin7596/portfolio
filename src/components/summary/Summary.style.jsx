import styled from "styled-components";

const Container = styled.div`
  @media (max-width: 1300px) {
    max-width: 700px;
    margin: auto;
    transform: none;
    position: unset;
  }
  border: 1px solid #565656;
  border-radius: 30px;
  min-width: 400px;
  padding: 30px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 28px;
  padding: 0 !important;
`;
const Email = styled.p`
  font-size: 24px;
  color: #fff;
  font-weight: 300;
  margin-bottom: 8px;
`;

const Location = styled.p`
  font-size: 24px;
  color: #fff;
  font-weight: 300;
  margin-bottom: 30px;
`;

export { Container, Description, Email, Location };
