import React from "react";
import { ProfileCard } from "../organisms/ProfileCard";
import { FullCalendar } from "../organisms/FullCalendar";
import { Footer } from "../molecules/Footer";

export const CalendarPage: React.VFC = () => {
  return (
    <div>
      <h2>Your Profile Data</h2>
      <ProfileCard />

      <h2>Calendar</h2>
      <FullCalendar />

      <h2>References</h2>
      <Footer />
    </div>
  );
};
