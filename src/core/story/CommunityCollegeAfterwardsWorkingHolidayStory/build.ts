import { addMonths, addYears, setMonth } from "date-fns";
import {
  RESOURCE_TEMPLATE__VISA_STUDY,
  RESOURCE_TEMPLATE__VISA_COOP,
  RESOURCE_TEMPLATE__WORKING_HOLIDAY_COOP,
  RESOURCE_TEMPLATE__STUDENT_STATUS,
  RESOURCE_TEMPLATE__WORKER_STATUS,
} from "../../../constants/fullcalendar/templates";
import {
  NAME_OF_STORY_ID,
  NAME_OF_ORDER,
} from "../../../constants/fullcalendar/settings";
import { uuid } from "../../../lib/uuid";
import { CommunityCollegeAfterwardsWorkingHolidayStory } from "./model";
import { createStoryName } from "../BaseStory";
import { BaseEvent } from "../../event/BaseEvent";
import { BaseResource } from "../../resource/BaseResource";

const VISA_BACKGROUND_COLOR = "#8fbc8b";
const STATUS_BACKGROUND_COLOR = "#ffd700";
const WH_WARN_BACKGROUND_COLOR = "#e73758";

export const build = ({
  startDate,
  calendarId,
}: {
  startDate: Date;
  calendarId: string;
}): CommunityCollegeAfterwardsWorkingHolidayStory => {
  const storyId = uuid();
  const name = createStoryName(startDate);
  const [resources, events] = generateStory(storyId, startDate);
  return {
    id: storyId,
    calendarId,
    name,
    events,
    resources,
  };
};

const generateStory = (storyId: string, startDate: Date) => {
  // Coop Visa
  const coopVisaResourceId = uuid();
  const coopVisaResource = {
    ...RESOURCE_TEMPLATE__VISA_COOP,
    id: coopVisaResourceId,
    [NAME_OF_STORY_ID]: storyId,
    [NAME_OF_ORDER]: 1,
  };
  const coopVisaEvent = {
    id: uuid(),
    resourceId: coopVisaResourceId,
    storyId,
    start: startDate.toISOString(),
    end: addMonths(startDate, 12 * 2).toISOString(),
    [NAME_OF_ORDER]: 1,
    backgroundColor: VISA_BACKGROUND_COLOR,
  };

  // StudyVisa
  const studyVisaResourceId = uuid();
  const studyVisaResource = {
    ...RESOURCE_TEMPLATE__VISA_STUDY,
    id: studyVisaResourceId,
    [NAME_OF_STORY_ID]: storyId,
    [NAME_OF_ORDER]: 2,
  };
  const studyVisaEvent = {
    id: uuid(),
    resourceId: studyVisaResourceId,
    storyId,
    start: startDate.toISOString(),
    end: addMonths(startDate, 12 * 2).toISOString(),
    [NAME_OF_ORDER]: 2,
    backgroundColor: VISA_BACKGROUND_COLOR,
  };

  // Working-holiday Visa
  const workingholidayResourceId = uuid();
  const workingholidayResource = {
    ...RESOURCE_TEMPLATE__WORKING_HOLIDAY_COOP,
    id: workingholidayResourceId,
    [NAME_OF_STORY_ID]: storyId,
    [NAME_OF_ORDER]: 3,
  };
  const dateAsStartWorkingHoliday = addMonths(startDate, 12 * 2);
  const workingHolidayVisaEvent = {
    id: uuid(),
    resourceId: workingholidayResourceId,
    storyId,
    start: dateAsStartWorkingHoliday.toISOString(),
    end: addMonths(dateAsStartWorkingHoliday, 12 * 1).toISOString(),
    [NAME_OF_ORDER]: 3,
    backgroundColor: VISA_BACKGROUND_COLOR,
  };
  const preWorkingHolidayVisaEvent = {
    id: uuid(),
    resourceId: workingholidayResourceId,
    storyId,
    start: setMonth(addYears(dateAsStartWorkingHoliday, -1), 8).toISOString(),
    end: dateAsStartWorkingHoliday.toISOString(),
    [NAME_OF_ORDER]: 3,
    backgroundColor: WH_WARN_BACKGROUND_COLOR,
  };

  // student status
  const studentStatusResourceId = uuid();
  const studentStatusResource = {
    ...RESOURCE_TEMPLATE__STUDENT_STATUS,
    id: studentStatusResourceId,
    [NAME_OF_STORY_ID]: storyId,
    [NAME_OF_ORDER]: 4,
  };
  const studentStatusVisaEvent = {
    id: uuid(),
    resourceId: studentStatusResourceId,
    storyId,
    start: startDate.toISOString(),
    end: addMonths(startDate, 12 * 2).toISOString(),
    [NAME_OF_ORDER]: 4,
    eventBackgroundCoor: STATUS_BACKGROUND_COLOR,
  };

  // worker status
  const workerStatusResourceId = uuid();
  const workerStatusResource = {
    ...RESOURCE_TEMPLATE__WORKER_STATUS,
    id: workerStatusResourceId,
    [NAME_OF_STORY_ID]: storyId,
    [NAME_OF_ORDER]: 5,
  };
  const workerStatusVisaEvent = {
    id: uuid(),
    resourceId: workerStatusResourceId,
    storyId,
    start: addMonths(startDate, 12 * 1).toISOString(),
    end: addMonths(startDate, 12 * 3).toISOString(),
    [NAME_OF_ORDER]: 5,
    eventBackgroundCoor: STATUS_BACKGROUND_COLOR,
  };

  const resources = [
    // visa
    coopVisaResource,
    studyVisaResource,
    workingholidayResource,

    // status
    studentStatusResource,
    workerStatusResource,
  ];
  const events = [
    // visa
    coopVisaEvent,
    studyVisaEvent,
    preWorkingHolidayVisaEvent,
    workingHolidayVisaEvent,

    // status
    studentStatusVisaEvent,
    workerStatusVisaEvent,
  ];
  return [resources, events] as [BaseResource[], BaseEvent[]];
};
