import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;
const BadgeList = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  z-index: 2;
`;

const Badge = styled.li`
  border: 1px solid;
  background: var(--color-grey-900);
  color: var(--color-grey-0);
  font-size: 14px;
  padding: 7px 20px;
  border-radius: 19px;
  transition: 0.3s;
`;
const LinkContainer = styled.h3`
  display: flex;
  align-items: center;
  text-align: start;
  font-size: 24px;
  font-weight: 300;
  a {
    color: var(--color-grey-900);
  }
  a:hover {
    border-bottom: 1px solid var(--color-grey-900);
    transition: 0.3s;
  }
  svg {
    margin-left: 5px;
  }
`;

export { Container, Card, Badge, LinkContainer, BadgeList };
