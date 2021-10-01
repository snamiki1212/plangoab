import styled from "styled-components";
import { CalendarTab } from "@/components/v2/x0_atoms/CalendarTab";

// TODO: v1 to v2
import { useUserCalendar } from "@/hooks/v1/useUserCalendar";
import { AddCalendarTab } from "@/components/v2/x1_molecules/AddCalendarTab";

const isSelected = (story: any, storyId: string) => story.id === storyId;
export const UserCalendarTabsList = () => {
  const { stories } = useUserCalendar();

  const selectedStoryId = stories[0].id; // TODO:

  return (
    <Container>
      {stories.map((story) => (
        <CalendarTab
          key={story.id}
          title={story.name}
          selected={isSelected(story, selectedStoryId)}
        />
      ))}
      <AddCalendarTab />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
`;
