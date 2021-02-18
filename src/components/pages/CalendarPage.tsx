import React from "react";
import styled from "styled-components";
import { ProfileCard } from "../organisms/ProfileCard";
import { TemplateList } from "../templates/TemplateList";
import { Footer } from "../molecules/Footer";
import { Header } from "../molecules/Header";
import { UserCalendarContainer } from "../molecules/UserCalendarContainer";
import { TemplateOptionCard } from "../molecules/TemplateOptionCard";

const TemplateHeader = () => <h2>Temapltes</h2>

export function CalendarPage() {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <UserCalendarContainer />

        <ControllerContainer>
          <ProfileCard />
          <TemplateOptionCard />
        </ControllerContainer>
        
        <TemplateContainer>
          <TemplateHeader />
          <TemplateList />
        </TemplateContainer>
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

const TemplateContainer = styled.div``
