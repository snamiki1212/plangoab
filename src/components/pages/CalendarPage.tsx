import React from "react";
import { ProfileCard } from "../organisms/ProfileCard";
import { FullCalendar } from "../organisms/FullCalendar";

export const CalendarPage: React.VFC = () => {
  return (
    <div>
      <ProfileCard />
      <hr />
      <FullCalendar />
    </div>
  );
};
