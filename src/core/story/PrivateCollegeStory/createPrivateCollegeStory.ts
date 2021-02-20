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
import { MONTH_OF_WORKING_HOLIDAY_APPLICATION_LIMIT } from "../../../constants/visa";
import { uuid } from "../../../lib/uuid";
import { PrivateCollegeStory } from "./model";
import { createStoryName } from "../BaseStory";
import { TemplateOption } from "../../calendar/BaseCalendar";
import { BaseEvent } from "../../event/BaseEvent";
import { BaseResource } from "../../resource/BaseResource";
import { convertIsoToYearAndMonth } from "../../../lib/date";

const VISA_BACKGROUND_COLOR = "#8fbc8b";
const STATUS_BACKGROUND_COLOR = "#ffd700";
const WH_WARN_BACKGROUND_COLOR = "#e73758";

export const createPrivateCollegeStory = (
  {
    startDate,
    calendarId,
    canWorkingholiday,
  }: {
    startDate: Date;
    calendarId: string;
    canWorkingholiday: boolean;
  },
  options: TemplateOption
): PrivateCollegeStory => {
  const storyId = uuid();
  const name = createStoryName(startDate);

  const [resources, events] = generateStory(
    {
      calendarId,
      storyId,
      startDate,
      canWorkingholiday,
    },
    options
  );
  return {
    id: storyId,
    calendarId,
    name,
    events,
    resources,
  };
};

const generateStory = (
  {
    calendarId,
    storyId,
    startDate,
    canWorkingholiday,
  }: {
    calendarId: string;
    storyId: string;
    startDate: Date;
    canWorkingholiday: boolean;
  },
  options: TemplateOption
) => {
  let resources = [] as BaseResource[];
  let events = [] as BaseEvent[];

  const { schoolPeriod, coopPeriod, workingholidayPeriod } = options;
  const withCoop = coopPeriod > 0;

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
      title: "Co-op VISA",
      start: convertIsoToYearAndMonth(startDate.toISOString()),
      end: convertIsoToYearAndMonth(
        addMonths(startDate, coopPeriod).toISOString()
      ),
      backgroundColor: VISA_BACKGROUND_COLOR,
      extendedProps: {
        resourceId: coopVisaResourceId,
        calendarId,
        storyId,
      },
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
    title: "Study VISA",
    start: convertIsoToYearAndMonth(startDate.toISOString()),
    end: convertIsoToYearAndMonth(
      addMonths(startDate, schoolPeriod).toISOString()
    ),
    backgroundColor: VISA_BACKGROUND_COLOR,
    extendedProps: {
      resourceId: studyVisaResourceId,
      calendarId,
      storyId,
    },
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
    const dateAsStartWorkingHoliday = addMonths(startDate, schoolPeriod);
    events.push({
      id: uuid(),
      resourceId: workingholidayResourceId,
      storyId,
      title: "Working Holiday VISA",
      start: convertIsoToYearAndMonth(dateAsStartWorkingHoliday.toISOString()),
      end: convertIsoToYearAndMonth(
        addMonths(dateAsStartWorkingHoliday, workingholidayPeriod).toISOString()
      ),
      backgroundColor: VISA_BACKGROUND_COLOR,
      extendedProps: {
        resourceId: workingholidayResourceId,
        calendarId,
        storyId,
      },
    });
    events.push({
      id: uuid(),
      resourceId: workingholidayResourceId,
      storyId,
      title: "Ready for Working Holiday VISA",
      start: convertIsoToYearAndMonth(
        setMonth(
          addYears(dateAsStartWorkingHoliday, -1),
          MONTH_OF_WORKING_HOLIDAY_APPLICATION_LIMIT
        ).toISOString()
      ),
      end: convertIsoToYearAndMonth(dateAsStartWorkingHoliday.toISOString()),
      backgroundColor: WH_WARN_BACKGROUND_COLOR,
      extendedProps: {
        resourceId: workingholidayResourceId,
        calendarId,
        storyId,
      },
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
      title: "Status: Worker",
      start: convertIsoToYearAndMonth(
        addMonths(startDate, schoolPeriod).toISOString()
      ),
      end: convertIsoToYearAndMonth(
        addMonths(startDate, schoolPeriod + workingholidayPeriod).toISOString()
      ),
      eventBackgroundCoor: STATUS_BACKGROUND_COLOR,
      extendedProps: {
        resourceId: workerStatusResourceId,
        calendarId,
        storyId,
      },
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
    title: "Status: Student",
    start: convertIsoToYearAndMonth(startDate.toISOString()),
    end: convertIsoToYearAndMonth(
      addMonths(startDate, schoolPeriod).toISOString()
    ),
    eventBackgroundCoor: STATUS_BACKGROUND_COLOR,
    extendedProps: {
      resourceId: studentStatusResourceId,
      calendarId,
      storyId,
    },
  });

  return [[...resources], [...events]] as [BaseResource[], BaseEvent[]];
};
