import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

const Link = styled.a`
  display: block;
  width: 50px;
  height: 50px;
  line-height: 57px;
  text-align: center;
  border: 2px solid #565656;
  border-radius: 50%;
  color: #999999;
  font-size: 20px;
  transition: 0.3s;
  :hover {
    color: #28e98c;
    cursor: pointer;
    border-color: #28e98c;
  }
`;

export { Container, Link };
