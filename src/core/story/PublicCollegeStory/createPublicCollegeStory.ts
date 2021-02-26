import { addMonths, addYears, setMonth } from "date-fns";
import {
  // resources
  RESOURCE_TEMPLATE__VISA_STUDY,
  RESOURCE_TEMPLATE__VISA_WORKING_HOLIDAY,
  RESOURCE_TEMPLATE__VISA_PGWP,
  RESOURCE_TEMPLATE__STATUS,
  // events
  EVENT_TEMPLATE__VISA_STUDY,
  EVENT_TEMPLATE__VISA_PGWP,
  EVENT_TEMPLATE__VISA_READY_WORKING_HOLIDAY,
  EVENT_TEMPLATE__VISA_WORKING_HOLIDAY,
  EVENT_TEMPLATE__STATUS_STATUS,
  EVENT_TEMPLATE__STATUS_WORKER,
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
import { BaseEvent, initEvent } from "../../event/BaseEvent";
import { BaseResource, initResource } from "../../resource/BaseResource";
import { convertIsoToYearAndMonth } from "../../../lib/date";

export const createPublicCollegeStory = (
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

  const [resources, events] = doCreateStory(
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

  const { schoolPeriod, pgwpPeriod, workingholidayPeriod } = options;
  const withPgwp = pgwpPeriod > 0;

  if (withPgwp) {
    const pgwpVisaResourceId = uuid();
    resources.push(
      initResource({
        ...RESOURCE_TEMPLATE__VISA_PGWP,
        id: pgwpVisaResourceId,
        calendarId,
        [NAME_OF_STORY_ID]: storyId,
        [NAME_OF_ORDER]: 1,
      })
    );
    events.push(
      initEvent({
        ...EVENT_TEMPLATE__VISA_PGWP,
        id: uuid(),
        resourceId: pgwpVisaResourceId,
        storyId,
        start: convertIsoToYearAndMonth(
          addMonths(startDate, schoolPeriod).toISOString()
        ),
        end: convertIsoToYearAndMonth(
          addMonths(startDate, schoolPeriod + pgwpPeriod).toISOString()
        ),
        extendedProps: {
          resourceId: pgwpVisaResourceId,
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
      ...RESOURCE_TEMPLATE__VISA_STUDY,
      id: studyVisaResourceId,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 2,
    })
  );
  events.push(
    initEvent({
      ...EVENT_TEMPLATE__VISA_STUDY,
      id: uuid(),
      resourceId: studyVisaResourceId,
      storyId,
      start: convertIsoToYearAndMonth(startDate.toISOString()),
      end: convertIsoToYearAndMonth(
        addMonths(startDate, schoolPeriod).toISOString()
      ),
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
        ...RESOURCE_TEMPLATE__VISA_WORKING_HOLIDAY,
        id: workingholidayResourceId,
        calendarId,
        [NAME_OF_STORY_ID]: storyId,
        [NAME_OF_ORDER]: 3,
      })
    );
    const dateAsStartWorkingHoliday = addMonths(
      startDate,
      schoolPeriod + pgwpPeriod
    );
    events.push(
      initEvent({
        ...EVENT_TEMPLATE__VISA_WORKING_HOLIDAY,
        id: uuid(),
        resourceId: workingholidayResourceId,
        storyId,
        start: convertIsoToYearAndMonth(
          dateAsStartWorkingHoliday.toISOString()
        ),
        end: convertIsoToYearAndMonth(
          addMonths(
            dateAsStartWorkingHoliday,
            workingholidayPeriod
          ).toISOString()
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
        ...EVENT_TEMPLATE__VISA_READY_WORKING_HOLIDAY,
        id: uuid(),
        resourceId: workingholidayResourceId,
        storyId,
        start: convertIsoToYearAndMonth(
          setMonth(
            addYears(dateAsStartWorkingHoliday, -1),
            MONTH_OF_WORKING_HOLIDAY_APPLICATION_LIMIT
          ).toISOString()
        ),
        end: convertIsoToYearAndMonth(dateAsStartWorkingHoliday.toISOString()),
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
      ...RESOURCE_TEMPLATE__STATUS,
      id: statusResourceId,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 5,
    })
  );
  events.push(
    initEvent({
      ...EVENT_TEMPLATE__STATUS_WORKER,
      id: uuid(),
      resourceId: statusResourceId,
      storyId,
      start: convertIsoToYearAndMonth(
        addMonths(startDate, schoolPeriod).toISOString()
      ),
      end: convertIsoToYearAndMonth(
        addMonths(
          startDate,
          schoolPeriod + pgwpPeriod + workingholidayPeriod
        ).toISOString()
      ),
      extendedProps: {
        resourceId: statusResourceId,
        calendarId,
        storyId,
      },
    }),
    initEvent({
      ...EVENT_TEMPLATE__STATUS_STATUS,
      id: uuid(),
      resourceId: statusResourceId,
      storyId,
      start: convertIsoToYearAndMonth(startDate.toISOString()),
      end: convertIsoToYearAndMonth(
        addMonths(startDate, schoolPeriod).toISOString()
      ),
      extendedProps: {
        resourceId: statusResourceId,
        calendarId,
        storyId,
      },
    })
  );

  return [[...resources], [...events]] as [BaseResource[], BaseEvent[]];
};
