import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.header`
  font-size: ${(props) => (props.isLarge ? "78px" : "48px")};
  text-align: start;
  letter-spacing: -0.2px;
  line-height: 90px;
  margin-bottom: 43px;
  font-weight: 300;
  color: var(--color-grey-0);

  span {
    color: var(--color-green-700);
  }
`;

const SubtitleContainer = styled.h4`
  text-align: start;
  margin-bottom: 43px;
`;

export { Container, StyledHeader, SubtitleContainer };
