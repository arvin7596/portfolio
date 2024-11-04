import styled from "styled-components";

const ResumeContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding-left: 74px;
  padding-bottom: 68px;
  position: relative;
  align-items: start;
  &::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background: #656565;
    border-radius: 50%;
    left: -6px;
    top: 7px;
    transition: 0.3s;
  }
  &:hover::before {
    background-color: green;
    transition: 1s;
  }
  &:hover > span {
    color: green;
    transition: 1s;
  }
  &::after {
    content: "";
    background: #333333;
    width: 1px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 10px;
    z-index: -1;
  }
`;
const Year = styled.span`
  margin-bottom: 28px;
  font-size: 16px;
  color: #999999;
`;
const Title = styled.h3`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 5px;
  color: #fff;
`;
const Description = styled.div`
  font-size: 13px;
  color: #999999;
  margin-bottom: 18px;
`;

export { ResumeContainer, Year, Title, Description };
