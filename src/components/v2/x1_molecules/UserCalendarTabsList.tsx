import styled from "styled-components";

import { useSelectTab } from "~/src/hooks/v2/useSelectTab";
import { UserCalendarTab } from "~/src/components/v2/x1_molecules/UserCalendarTab";
import { AddCalendarTab } from "~/src/components/v2/x1_molecules/AddCalendarTab";

// TODO: v1 to v2
import { useUserCalendar } from "~/src/hooks/v1/useUserCalendar";

export const UserCalendarTabsList = () => {
  useSelectTab();
  const { stories } = useUserCalendar();

  return (
    <Container>
      {stories.map((story) => (
        <UserCalendarTab story={story} key={story.id} />
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
