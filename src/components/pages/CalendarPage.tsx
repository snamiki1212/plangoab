import React from "react";
import { ProfileCard } from "../organisms/ProfileCard";
import { FullCalendar } from "../organisms/FullCalendar";

export const CalendarPage: React.VFC = () => {
  return (
    <div>
      <h2>Your Profile Data</h2>
      <ProfileCard />

      <h2>Calendar</h2>
      <FullCalendar />
    </div>
  );
};
