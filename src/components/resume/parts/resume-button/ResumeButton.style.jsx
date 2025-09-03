import { Link } from "react-scroll";
import styled from "styled-components";

const LinkButton = styled(Link)`
  @media (max-width: 1300px) {
    display: none;
  }
  margin-left: auto;
`;

const Container = styled.div`
  width: 175px;
  height: 175px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #575757;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const Image = styled.img`
  height: auto;
  max-width: 100%;
  border: none;
  border-radius: 0;
  box-shadow: none;
  display: block;
  animation: rotate 5s linear infinite;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Icon = styled.div`
  position: absolute;
  color: #fff;
  font-size: 40px;
  display: flex;
`;

export { Container, Image, Icon, LinkButton };
