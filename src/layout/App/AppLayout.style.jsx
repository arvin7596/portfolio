import styled from "styled-components";

const Content = styled.div`
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  padding-top: 50px;
  scroll-snap-type: y mandatory; /* Enable full-page scrolling */
  height: 100vh;
  overflow-y: scroll; /* Enable vertical scrolling */
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const VideoBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
`;

const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -2;
`;

export { Video, Content, VideoBackground };
