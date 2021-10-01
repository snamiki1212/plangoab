import styled from "styled-components";
import { CalendarTab } from "@/components/v2/x0_atoms/CalendarTab";

// TODO: v1 to v2
import { useUserCalendar } from "@/hooks/v1/useUserCalendar";

const isSelected = (story: any, storyId: string) => story.id === storyId;
export const UserCalendarTabsList = () => {
  const { stories } = useUserCalendar();

  const selectedStoryId = stories[0].id; // TODO:

  return (
    <Container>
      {stories.map((story) => (
        <Inner>
          <CalendarTab
            title={story.name}
            selected={isSelected(story, selectedStoryId)}
          />
        </Inner>
      ))}
      <Inner>
        <CalendarTab title="+" selected={false} />
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
`;

const Inner = styled.div``;
