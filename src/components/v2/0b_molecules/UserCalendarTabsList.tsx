import styled from "styled-components";

import { UserCalendarTab } from "~/src/components/v2/0b_molecules/UserCalendarTab";
import { AddCalendarTab } from "~/src/components/v2/0b_molecules/AddCalendarTab";

// TODO: v1 to v2
import { useUserCalendar } from "~/src/hooks/v1/useUserCalendar";

type Props = { canEdit: boolean };

export const UserCalendarTabsList: React.VFC<Props> = ({ canEdit }) => {
  const { stories } = useUserCalendar();

  return (
    <Container>
      {stories.map((story) => (
        <UserCalendarTab story={story} key={story.id} canEdit={canEdit} />
      ))}
      {canEdit && <AddCalendarTab />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
`;
