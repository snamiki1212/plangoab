import React from "react";
import styled from "styled-components";
import { ProfileCard } from "../organisms/ProfileCard";
import { TemplateList } from "../organisms/TemplateList";
import { UserCalendarContainer } from "../molecules/UserCalendarContainer";
import { Footer } from "../molecules/Footer";
import { Header } from "../molecules/Header";

export function CalendarPage() {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <ControllerContainer>
          <ProfileCard />
          <TemplateList />
        </ControllerContainer>
        <UserCalendarContainer />
      </ContentContainer>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContentContainer = styled.div`
  padding: 0 3rem;
  display: grid;
  gap: 5rem;
`;

const ControllerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
