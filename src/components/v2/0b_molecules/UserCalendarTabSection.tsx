import styled from "styled-components";
import { UserCalendarTabsList } from "~/src/components/v2/0b_molecules/UserCalendarTabsList";
import { SaveTab } from "~/src/components/v2/0b_molecules/SaveTab";

export const UserCalendarTabSection = () => {
  return (
    <Container>
      <UserCalendarTabsList />
      <SaveTab />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
