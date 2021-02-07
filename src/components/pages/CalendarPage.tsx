import React from "react";
import styled from "styled-components";
import { ProfileCard } from "../organisms/ProfileCard";
import { CalendarList } from "../organisms/CalendarList";
import { Footer } from "../molecules/Footer";

export function CalendarPage () {
  return (
    <Container>
      <div>
        <SubTitle>Your Profile Data</SubTitle>
        <ProfileCard />
      </div>

      <div>
        <SubTitle>Calendar</SubTitle>
        <CalendarList />
      </div>

      <div>
        <SubTitle>References</SubTitle>
        <Footer />
      </div>
    </Container>
  );
};

const SubTitle = styled.div`
  background: darkblue;
  color: white;
  font-size: 4rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
