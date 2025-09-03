import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.header`
  @media (max-width: 787px) {
    font-size: 58px;
    line-height: 1.3;
    font-style: normal;
  }
  @media (max-width: 584px) {
    font-size: 37px;
  }
  font-size: ${(props) => (props.isLarge ? "78px" : "48px")};
  text-align: start;
  letter-spacing: -0.2px;
  line-height: 90px;
  margin-bottom: 43px;
  font-weight: 300;
  color: var(--color-grey-900);
  span {
    color: var(--color-primary);
  }
`;

const SubtitleContainer = styled.h4`
  text-align: start;
  margin-bottom: 43px;
`;

export { Container, StyledHeader, SubtitleContainer };
