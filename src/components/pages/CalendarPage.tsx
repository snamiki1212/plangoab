import React from "react";
import styled from "styled-components";
import { ProfileCard } from "../organisms/ProfileCard";
import { Footer } from "../molecules/Footer";
import { Header } from "../molecules/Header";
import { UserCalendarArea } from "../organisms/UserCalendarArea";
import { TemplateOptionCard } from "../molecules/TemplateOptionCard";
import { TemplateCalendarArea } from '../organisms/TemplateCalendarArea';

export function CalendarPage() {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <UserCalendarArea />

        <ControllerContainer>
          <ProfileCard />
          <TemplateOptionCard />
        </ControllerContainer>
        
        <TemplateContainer>
          <TemplateCalendarArea />
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
