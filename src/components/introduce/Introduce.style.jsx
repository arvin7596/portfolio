import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 30px;
  text-align: start;
  color: var(--color-grey-500);
  margin-bottom: 30px;
`;

const Experience = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 100px;
  margin-top: 55px;
`;

const ExperienceItem = styled.div``;

const ExperienceTitle = styled.h2`
  font-size: 72px;
  color: var(--color-primary);
  line-height: 56px;
  margin-bottom: 38px;
  font-weight: 300;
`;
const ExperienceSubtitle = styled.p`
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  display: table-caption;
  text-align: start;
  color: var(--color-grey-500);
`;

export {
  Container,
  Description,
  Experience,
  ExperienceItem,
  ExperienceTitle,
  ExperienceSubtitle,
};
