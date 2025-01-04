import { HiMiniArrowUpRight } from "react-icons/hi2";
import {
  Badge,
  BadgeList,
  Card,
  LinkContainer,
  Container,
} from "./PortfolioCard.style";

function PortfolioCard({ cover, badges, link, title, onClick }) {
  return (
    <Container>
      <Card onClick={onClick}>
        <img src={cover} alt="project1" />
        <BadgeList>
          {badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </BadgeList>
      </Card>
      <LinkContainer>
        <a href={link} target="_blank">
          {title}
        </a>
        {link && <HiMiniArrowUpRight />}
      </LinkContainer>
    </Container>
  );
}

export default PortfolioCard;
