import styled from "styled-components";

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding-top: 68px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const VideoBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

export { Video, Content, VideoBackground };
