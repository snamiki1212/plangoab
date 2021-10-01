import styled from "styled-components";

import { useSelectTab } from "@/hooks/v2/useSelectTab";
import { UserCalendarTab } from "@/components/v2/x1_molecules/UserCalendarTab";
import { AddCalendarTab } from "@/components/v2/x1_molecules/AddCalendarTab";

// TODO: v1 to v2
import { useUserCalendar } from "@/hooks/v1/useUserCalendar";

export const UserCalendarTabsList = () => {
  useSelectTab();
  const { stories } = useUserCalendar();

  return (
    <Container>
      {stories.map((story) => (
        <UserCalendarTab story={story} />
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
