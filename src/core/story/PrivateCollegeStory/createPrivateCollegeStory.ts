import { addMonths, addYears, setMonth } from "date-fns";
import { RESOURCES, EVENTS } from "../../../constants/fullcalendar/templates";
import {
  NAME_OF_STORY_ID,
  NAME_OF_ORDER,
} from "../../../constants/fullcalendar/settings";
import { MONTH_OF_WORKING_HOLIDAY_APPLICATION_LIMIT } from "../../../constants/visa";
import { uuid } from "../../../lib/uuid";
import { PrivateCollegeStory } from "./model";
import { createStoryName } from "../BaseStory";
import { TemplateOption } from "../../calendar/BaseCalendar";
import { BaseEvent, initEvent } from "../../event/BaseEvent";
import { BaseResource, initResource } from "../../resource/BaseResource";
import { convertIsoToYearAndMonth } from "../../../lib/date";

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
  const params = {
    calendarId,
    storyId,
    startDate,
    canWorkingholiday,
  };

  const [resources, events] = doCreateStory(params, options);
  return {
    id: storyId,
    calendarId,
    name,
    events,
    resources,
  };
};

const doCreateStory = (
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
    const coopVisaResourceId = uuid();
    resources.push(
      initResource({
        ...RESOURCES.VISA.COOP,
        id: coopVisaResourceId,
        calendarId,
        [NAME_OF_STORY_ID]: storyId,
        [NAME_OF_ORDER]: 1,
      })
    );
    events.push(
      initEvent({
        ...EVENTS.VISA.COOP,
        id: uuid(),
        resourceId: coopVisaResourceId,
        storyId,
        start: convertIsoToYearAndMonth(startDate),
        end: convertIsoToYearAndMonth(addMonths(startDate, coopPeriod)),
        extendedProps: {
          resourceId: coopVisaResourceId,
          calendarId,
          storyId,
        },
      })
    );
  }

  // StudyVisa
  const studyVisaResourceId = uuid();
  resources.push(
    initResource({
      ...RESOURCES.VISA.STUDY,
      id: studyVisaResourceId,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 2,
    })
  );
  events.push(
    initEvent({
      ...EVENTS.VISA.STUDY,
      id: uuid(),
      resourceId: studyVisaResourceId,
      storyId,
      start: convertIsoToYearAndMonth(startDate),
      end: convertIsoToYearAndMonth(addMonths(startDate, schoolPeriod)),
      extendedProps: {
        resourceId: studyVisaResourceId,
        calendarId,
        storyId,
      },
    })
  );

  if (canWorkingholiday) {
    const workingholidayResourceId = uuid();
    resources.push(
      initResource({
        ...RESOURCES.VISA.WORKING_HOLIDAY,
        id: workingholidayResourceId,
        calendarId,
        [NAME_OF_STORY_ID]: storyId,
        [NAME_OF_ORDER]: 3,
      })
    );
    const dateAsStartWorkingHoliday = addMonths(startDate, schoolPeriod);
    events.push(
      initEvent({
        ...EVENTS.VISA.WORKING_HOLIDAY,
        id: uuid(),
        resourceId: workingholidayResourceId,
        storyId,
        start: convertIsoToYearAndMonth(dateAsStartWorkingHoliday),
        end: convertIsoToYearAndMonth(
          addMonths(dateAsStartWorkingHoliday, workingholidayPeriod)
        ),
        extendedProps: {
          resourceId: workingholidayResourceId,
          calendarId,
          storyId,
        },
      })
    );
    events.push(
      initEvent({
        ...EVENTS.VISA.READY_WORKING_HOLIDAY,
        id: uuid(),
        resourceId: workingholidayResourceId,
        storyId,
        start: convertIsoToYearAndMonth(
          setMonth(
            addYears(dateAsStartWorkingHoliday, -1),
            MONTH_OF_WORKING_HOLIDAY_APPLICATION_LIMIT
          )
        ),
        end: convertIsoToYearAndMonth(dateAsStartWorkingHoliday),
        extendedProps: {
          resourceId: workingholidayResourceId,
          calendarId,
          storyId,
        },
      })
    );
  }

  // worker status
  const statusResourceId = uuid();
  resources.push(
    initResource({
      ...RESOURCES.STATUS,
      id: statusResourceId,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 5,
    })
  );
  events.push(
    initEvent({
      ...EVENTS.STATUS.WORKER,
      id: uuid(),
      resourceId: statusResourceId,
      storyId,
      start: convertIsoToYearAndMonth(addMonths(startDate, schoolPeriod)),
      end: convertIsoToYearAndMonth(
        addMonths(startDate, schoolPeriod + workingholidayPeriod)
      ),
      extendedProps: {
        resourceId: statusResourceId,
        calendarId,
        storyId,
      },
    }),
    initEvent({
      ...EVENTS.STATUS.STUDENTS,
      id: uuid(),
      resourceId: statusResourceId,
      storyId,
      start: convertIsoToYearAndMonth(startDate),
      end: convertIsoToYearAndMonth(addMonths(startDate, schoolPeriod)),
      extendedProps: {
        resourceId: statusResourceId,
        calendarId,
        storyId,
      },
    })
  );

  return [[...resources], [...events]] as [BaseResource[], BaseEvent[]];
};
