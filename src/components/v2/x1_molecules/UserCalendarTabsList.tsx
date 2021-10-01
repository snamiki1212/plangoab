import styled from "styled-components";

import { useSelectTabInitially } from "@/hooks/v2/useSelectTabInitially";
import { UserCalendarTab } from "@/components/v2/x1_molecules/UserCalendarTab";
import { AddCalendarTab } from "@/components/v2/x1_molecules/AddCalendarTab";

// TODO: v1 to v2
import { useUserCalendar } from "@/hooks/v1/useUserCalendar";

export const UserCalendarTabsList = () => {
  useSelectTabInitially();
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
