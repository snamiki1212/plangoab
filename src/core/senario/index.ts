import { createEvent as createWorkingHolidayVisaEvent } from "../visa/workingHoliday";
import { createEvent as createCoopVisaEvent } from "../visa/coop";
import { createEvent as createStudentVisaEvent } from "../visa/student";
import {
  RESOURCE_ID__SHARED__AGE,
  RESOURCE_ID__SHARED__LIMIT,
  RESOURCE_ID__VISA__STUDY,
  RESOURCE_ID__VISA__COOP,
  RESOURCE_ID__VISA__WORKING_HOLIDAY,
  RESOURCE_ID__STATUS__WORKER,
  RESOURCE_ID__STATUS__STUDENT,
  RESOURCE_ID__ETC__CUSTOM,
  RESOURCE_ID,
} from "../../constants/fullcalendar";

export const createEventByName = (name: RESOURCE_ID) => {
  switch (name) {
    // Shared
    case RESOURCE_ID__SHARED__AGE: {
      return console.log("__XX__");
    }
    case RESOURCE_ID__SHARED__LIMIT: {
      return console.log("__XX__");
    }

    // Visa
    case RESOURCE_ID__VISA__STUDY: {
      return createStudentVisaEvent();
    }
    case RESOURCE_ID__VISA__COOP: {
      return createCoopVisaEvent();
    }
    case RESOURCE_ID__VISA__WORKING_HOLIDAY: {
      return createWorkingHolidayVisaEvent();
    }

    // Status
    case RESOURCE_ID__STATUS__WORKER: {
      return console.log("__XX__");
    }
    case RESOURCE_ID__STATUS__STUDENT: {
      return console.log("__XX__");
    }

    // etc
    case RESOURCE_ID__ETC__CUSTOM: {
      return console.log("__XX__");
    }
    default: {
      return console.log("ERROR");
    }
  }
};
