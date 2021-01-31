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

      <h2>References</h2>
      <ul>
        <li>
          <a
            href="https://github.com/snamiki1212/canada-immigration-scheduler"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
      </ul>
    </div>
  );
};
