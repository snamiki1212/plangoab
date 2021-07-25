import { Factory } from "fishery";
import { BaseCalendar } from "@/core/calendar/BaseCalendar";
import { storyFactory } from "./story";

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
