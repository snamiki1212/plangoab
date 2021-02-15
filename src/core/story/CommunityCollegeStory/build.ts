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
import { CommunityCollegeStory } from "./model";
import { createStoryName } from "../BaseStory";
import { BaseEvent } from "../../event/BaseEvent";
import { BaseResource } from "../../resource/BaseResource";

const VISA_BACKGROUND_COLOR = "#8fbc8b";
const STATUS_BACKGROUND_COLOR = "#ffd700";
const WH_WARN_BACKGROUND_COLOR = "#e73758";

export const build = ({
  startDate,
  calendarId,
  canWorkingholiday,
}: {
  startDate: Date;
  calendarId: string;
  canWorkingholiday: boolean;
}): CommunityCollegeStory => {
  const storyId = uuid();
  const name = createStoryName(startDate);
  const [resources, events] = generateStory({
    calendarId,
    storyId,
    startDate,
    canWorkingholiday,
  });
  return {
    id: storyId,
    calendarId,
    name,
    events,
    resources,
  };
};

const generateStory = ({
  calendarId,
  storyId,
  startDate,
  canWorkingholiday,
}: {
  calendarId: string;
  storyId: string;
  startDate: Date;
  canWorkingholiday: boolean;
}) => {
  let resources = [] as BaseResource[];
  let events = [] as BaseEvent[];
  const withCoop = true; // TODO:

  if (withCoop) {
    // Coop Visa
    const coopVisaResourceId = uuid();
    resources.push({
      ...RESOURCE_TEMPLATE__VISA_COOP,
      id: coopVisaResourceId,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 1,
    });
    events.push({
      id: uuid(),
      resourceId: coopVisaResourceId,
      storyId,
      start: startDate.toISOString(),
      end: addMonths(startDate, 12 * 2).toISOString(),
      [NAME_OF_ORDER]: 1,
      backgroundColor: VISA_BACKGROUND_COLOR,
    });
  }

  // StudyVisa
  const studyVisaResourceId = uuid();
  resources.push({
    ...RESOURCE_TEMPLATE__VISA_STUDY,
    id: studyVisaResourceId,
    calendarId,
    [NAME_OF_STORY_ID]: storyId,
    [NAME_OF_ORDER]: 2,
  });
  events.push({
    id: uuid(),
    resourceId: studyVisaResourceId,
    storyId,
    start: startDate.toISOString(),
    end: addMonths(startDate, 12 * 2).toISOString(),
    [NAME_OF_ORDER]: 2,
    backgroundColor: VISA_BACKGROUND_COLOR,
  });

  if (canWorkingholiday) {
    const workingholidayResourceId = uuid();
    resources.push({
      ...RESOURCE_TEMPLATE__WORKING_HOLIDAY_COOP,
      id: workingholidayResourceId,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 3,
    });
    const dateAsStartWorkingHoliday = addMonths(startDate, 12 * 2);
    events.push({
      // workingHolidayVisaEvent
      id: uuid(),
      resourceId: workingholidayResourceId,
      storyId,
      start: dateAsStartWorkingHoliday.toISOString(),
      end: addMonths(dateAsStartWorkingHoliday, 12 * 1).toISOString(),
      [NAME_OF_ORDER]: 3,
      backgroundColor: VISA_BACKGROUND_COLOR,
    });
    events.push({
      // preWorkingHolidayVisaEvent
      id: uuid(),
      resourceId: workingholidayResourceId,
      storyId,
      start: setMonth(addYears(dateAsStartWorkingHoliday, -1), 8).toISOString(),
      end: dateAsStartWorkingHoliday.toISOString(),
      [NAME_OF_ORDER]: 3,
      backgroundColor: WH_WARN_BACKGROUND_COLOR,
    });

    // worker status
    const workerStatusResourceId = uuid();
    resources.push({
      ...RESOURCE_TEMPLATE__WORKER_STATUS,
      id: workerStatusResourceId,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 5,
    });
    events.push({
      id: uuid(),
      resourceId: workerStatusResourceId,
      storyId,
      start: addMonths(startDate, 12 * 1).toISOString(),
      end: addMonths(startDate, 12 * 3).toISOString(),
      [NAME_OF_ORDER]: 5,
      eventBackgroundCoor: STATUS_BACKGROUND_COLOR,
    });
  }

  // student status
  const studentStatusResourceId = uuid();
  resources.push({
    ...RESOURCE_TEMPLATE__STUDENT_STATUS,
    id: studentStatusResourceId,
    calendarId,
    [NAME_OF_STORY_ID]: storyId,
    [NAME_OF_ORDER]: 4,
  });
  events.push({
    id: uuid(),
    resourceId: studentStatusResourceId,
    storyId,
    start: startDate.toISOString(),
    end: addMonths(startDate, 12 * 2).toISOString(),
    [NAME_OF_ORDER]: 4,
    eventBackgroundCoor: STATUS_BACKGROUND_COLOR,
  });

  return [[...resources], [...events]] as [BaseResource[], BaseEvent[]];
};
