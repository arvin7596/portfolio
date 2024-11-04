import { Content, Video, VideoBackground } from "./AppLayout.style";

function AppLayout({ children }) {
  return (
    <VideoBackground>
      <Video autoPlay loop muted>
        <source src="video5.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      <Content>{children}</Content>;
    </VideoBackground>
  );
}

export default AppLayout;
