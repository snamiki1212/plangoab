import React from "react";
import styled from "styled-components";
import { ProfileCard } from "../organisms/ProfileCard";
import { CalendarList } from "../organisms/CalendarList";
import { Footer } from "../molecules/Footer";
import { Header } from "../molecules/Header";

export function CalendarPage() {
  return (
    <Container>
      <Header />
      <ContentWrapper>
        <ProfileCard />
        <CalendarList />
      </ContentWrapper>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContentWrapper = styled.div`
  padding: 0 3rem;
  display: grid;
  gap: 5rem;
`;
