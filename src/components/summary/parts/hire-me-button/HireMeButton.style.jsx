import styled from "styled-components";

const Container = styled.div`
  flex-direction: row;
  justify-content: center;
`;
const Button = styled.button`
  background: green;
  color: #000000;
  text-align: center;
  padding: 11px 58px 10px 58px;
  display: inline-flex;
  align-items: center;
  border-radius: 30px;
  justify-content: center;
  text-transform: uppercase;
  border: none;
  transition: 0.3s;
  cursor: pointer;
  border: 2px solid;
  &:hover {
    background: none;
    color: green;
  }
`;

const Icon = styled.span`
  font-size: 24px;
  margin-right: 10px;
  /* margin-bottom: 3px; */
`;

export { Container, Button, Icon };
