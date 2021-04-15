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
  const props = {
    calendarId,
    storyId,
    startDate,
    canWorkingholiday,
  };
  const [resources, events] = doCreateStory(props, options);

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

  // College Application
  const collegeApplicationId = uuid();
  resources.push(
    initResource({
      ...RESOURCES.TASK.COLLEGE_APPLICATION,
      id: collegeApplicationId,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 101,
    })
  );
  events.push(
    initEvent({
      ...EVENTS.TASK.COLLEGE_APPLICATION,
      id: uuid(),
      resourceId: collegeApplicationId,
      storyId,
      start: convertIsoToYearAndMonth(addMonths(startDate, -9)),
      end: convertIsoToYearAndMonth(addMonths(startDate, -8)),
      extendedProps: {
        resourceId: collegeApplicationId,
        calendarId,
        storyId,
      },
    })
  );

  // Payment
  const paymentId = uuid();
  resources.push(
    initResource({
      ...RESOURCES.TASK.PAYMENT,
      id: paymentId,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 102,
    })
  );
  events.push(
    initEvent({
      ...EVENTS.TASK.PAYMENT,
      id: uuid(),
      resourceId: paymentId,
      storyId,
      start: convertIsoToYearAndMonth(addMonths(startDate, -8)),
      end: convertIsoToYearAndMonth(addMonths(startDate, -7)),
      extendedProps: {
        resourceId: paymentId,
        calendarId,
        storyId,
      },
    })
  );

  // Ready for Visa Application
  const readyForVisaApplicationId = uuid();
  resources.push(
    initResource({
      ...RESOURCES.TASK.READY_FOR_VISA_APPLICATION,
      id: readyForVisaApplicationId,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 103,
    })
  );
  events.push(
    initEvent({
      ...EVENTS.TASK.READY_FOR_VISA_APPLICATION,
      id: uuid(),
      resourceId: readyForVisaApplicationId,
      storyId,
      start: convertIsoToYearAndMonth(addMonths(startDate, -7)),
      end: convertIsoToYearAndMonth(addMonths(startDate, -6)),
      extendedProps: {
        resourceId: readyForVisaApplicationId,
        calendarId,
        storyId,
      },
    })
  );

  // Biometrics
  const biometricsId = uuid();
  resources.push(
    initResource({
      ...RESOURCES.TASK.BIOMETRICS,
      id: biometricsId,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 104,
    })
  );
  events.push(
    initEvent({
      ...EVENTS.TASK.BIOMETORICS,
      id: uuid(),
      resourceId: biometricsId,
      storyId,
      start: convertIsoToYearAndMonth(addMonths(startDate, -6)),
      end: convertIsoToYearAndMonth(addMonths(startDate, -5)),
      extendedProps: {
        resourceId: biometricsId,
        calendarId,
        storyId,
      },
    })
  );

  // Ready for going
  const readyForGoingId = uuid();
  resources.push(
    initResource({
      ...RESOURCES.TASK.READY_FOR_GOING,
      id: readyForGoingId,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 105,
    })
  );
  events.push(
    initEvent({
      ...EVENTS.TASK.READY_FOR_GOING,
      id: uuid(),
      resourceId: readyForGoingId,
      storyId,
      start: convertIsoToYearAndMonth(addMonths(startDate, -5)),
      end: convertIsoToYearAndMonth(addMonths(startDate, -4)),
      extendedProps: {
        resourceId: readyForGoingId,
        calendarId,
        storyId,
      },
    })
  );

  // Last Check
  const lastCheckId = uuid();
  resources.push(
    initResource({
      ...RESOURCES.TASK.LAST_CHECK,
      id: lastCheckId,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 106,
    })
  );
  events.push(
    initEvent({
      ...EVENTS.TASK.LAST_CHECK,
      id: uuid(),
      resourceId: lastCheckId,
      storyId,
      start: convertIsoToYearAndMonth(addMonths(startDate, -4)),
      end: convertIsoToYearAndMonth(addMonths(startDate, -3)),
      extendedProps: {
        resourceId: lastCheckId,
        calendarId,
        storyId,
      },
    })
  );

  // PGWP
  if (withPgwp) {
    const pgwpVisaResourceId = uuid();
    resources.push(
      initResource({
        ...RESOURCES.VISA.PGWP,
        id: pgwpVisaResourceId,
        calendarId,
        [NAME_OF_STORY_ID]: storyId,
        [NAME_OF_ORDER]: 201,
      })
    );
    events.push(
      initEvent({
        ...EVENTS.VISA.PGWP,
        id: uuid(),
        resourceId: pgwpVisaResourceId,
        storyId,
        start: convertIsoToYearAndMonth(addMonths(startDate, schoolPeriod)),
        end: convertIsoToYearAndMonth(
          addMonths(startDate, schoolPeriod + pgwpPeriod)
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
      ...RESOURCES.VISA.STUDY,
      id: studyVisaResourceId,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 202,
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
        [NAME_OF_ORDER]: 203,
      })
    );
    const dateAsStartWorkingHoliday = addMonths(
      startDate,
      schoolPeriod + pgwpPeriod
    );
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

  // status
  const statusResourceId = uuid();
  resources.push(
    initResource({
      ...RESOURCES.STATUS,
      id: statusResourceId,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 205,
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
        addMonths(startDate, schoolPeriod + pgwpPeriod + workingholidayPeriod)
      ),
      extendedProps: {
        resourceId: statusResourceId,
        calendarId,
        storyId,
      },
    })
  );
  events.push(
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
