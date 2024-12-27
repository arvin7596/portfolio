import Animated from "../../../../ui/animated/Animated";
import { ResumeContainer, Description, Title, Year } from "./ResumeItem.style";

function ResumeItem({ data }) {
  return (
    <Animated
      animationVariants={{
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, x: 70 },
      }}
    >
      <ResumeContainer>
        <Year>
          {data.start_year} -{" "}
          {data.items[0].end_year ? data.items[0].end_year : "Present"}
        </Year>
        {data.items.map((el) => (
          <>
            <Title>{el.title}</Title>
            <Description>{el.company}</Description>
          </>
        ))}
      </ResumeContainer>
    </Animated>
  );
}

export default ResumeItem;
