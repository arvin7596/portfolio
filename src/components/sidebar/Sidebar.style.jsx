import styled, { createGlobalStyle } from "styled-components";

const Container = styled.div`
  width: 345px;
  height: 100vh;
  background: #191919;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 50px;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-345px")};
  transition: right 0.3s ease;
  z-index: 1000;
`;
const Menu = styled.div`
  width: 46%;
  margin: auto;
`;

const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Button = styled.button`
  position: absolute;
  right: 68px;
  top: 60px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  border: 1px solid #575757;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  transition: 0.3s;
  background: none;
  z-index: 99;
`;

export { Container, Menu, Overlay, Button };
