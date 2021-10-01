import { useEffect } from "react";
import styled from "styled-components";
import { CalendarTab } from "@/components/v2/x0_atoms/CalendarTab";
import {
  useSelectedTab,
  useSelectTabOfStoryId,
} from "@/hooks/v2/useSelectedTab";

// TODO: v1 to v2
import { useUserCalendar } from "@/hooks/v1/useUserCalendar";
import { AddCalendarTab } from "@/components/v2/x1_molecules/AddCalendarTab";

const isSelected = (story: any, storyId: string) => story.id === storyId;

export const UserCalendarTabsList = () => {
  const selectedStoryId = useSelectTabOfStoryId();
  const { stories } = useUserCalendar();
  const selectTab = useSelectedTab();

  // select tab initially and automatically
  useEffect(() => {
    if (selectedStoryId !== undefined) return;
    if (stories.length === 0) return;
    selectTab(stories[0].id);
  }, [stories, selectedStoryId]);

  return (
    <Container>
      {stories.map((story) => (
        <div key={story.id} onClick={() => selectTab(story.id)}>
          <CalendarTab
            title={story.name}
            selected={isSelected(story, selectedStoryId)}
          />
        </div>
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
