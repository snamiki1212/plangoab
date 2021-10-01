import { Factory } from "fishery";
import { BaseCalendar } from "~/src/core/v1/calendar/BaseCalendar";
import { storyFactory } from "./story";
// import {
//   PrivateCollegeCalendar,
//   PublicCollegeCalendar,
// } from "~/src/core/calendar/TemplateCalendar/model";

const decorateId = (id: number) => `CALENDAR_${id}`;

export const calendarFactory = Factory.define<BaseCalendar>(
  ({ sequence, associations }) => {
    const calendarId = decorateId(sequence);
    return {
      id: calendarId,
      stories:
        associations.stories || storyFactory.buildList(3, { calendarId }),
    };
  }
);

export const privateCollegeCalendarFactory = calendarFactory;
export const publicCollegeCalendarFactory = calendarFactory;
