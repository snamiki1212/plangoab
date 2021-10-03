import styled from "styled-components";
import { UserCalendarTabsList } from "~/src/components/v2/0b_molecules/UserCalendarTabsList";
import { SaveTab } from "~/src/components/v2/0b_molecules/SaveTab";
import { useCanEditCalendar } from "~/src/hooks/v2/useCanEditCalendar";

export const UserCalendarTabSection = () => {
  const canEdit = useCanEditCalendar();

  return (
    <Container>
      <UserCalendarTabsList canEdit={canEdit} />
      {canEdit && <SaveTab />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
