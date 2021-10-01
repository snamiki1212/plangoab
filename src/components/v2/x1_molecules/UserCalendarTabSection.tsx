import styled from "styled-components";
import { UserCalendarTabsList } from "@/components/v2/x1_molecules/UserCalendarTabsList";
import { SaveTab } from "@/components/v2/x1_molecules/SaveTab";

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
