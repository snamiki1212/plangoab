import { createEvent as createWorkingHolidayEvent } from "../visa/workingHoliday";
import {
  RESOURCE_ID__VISA__WORKING_HOLIDAY,
  RESOURCE_ID,
} from "../../constants/fullcalendar";

export const createEventByName = (name: RESOURCE_ID) => {
  switch (name) {
    case RESOURCE_ID__VISA__WORKING_HOLIDAY: {
      return createWorkingHolidayEvent();
    }
    default: {
      return createWorkingHolidayEvent();
    }
  }
};
