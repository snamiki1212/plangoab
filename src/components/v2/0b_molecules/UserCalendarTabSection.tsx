import styled from "styled-components";
import { UserCalendarTabsList } from "~/src/components/v2/0b_molecules/UserCalendarTabsList";
import { CalendarTabSave } from "~/src/components/v2/0b_molecules/CalendarTabSave";
import { CalendarTawNew } from "~/src/components/v2/0b_molecules/CalendarTawNew";
import { useCanEditCalendar } from "~/src/hooks/v2/useCanEditCalendar";

export const UserCalendarTabSection = () => {
  const canEdit = useCanEditCalendar();

  return (
    <Container>
      <UserCalendarTabsList canEdit={canEdit} />
      {canEdit ? <CalendarTabSave /> : <CalendarTawNew />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
