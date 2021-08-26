import { addMonths, addYears, setMonth, addDays } from "date-fns";
import { RESOURCES, EVENTS } from "@/constants/fullcalendar/templates";
import {
  NAME_OF_STORY_ID,
  NAME_OF_ORDER,
} from "@/constants/fullcalendar/settings";
import { MONTH_OF_WORKING_HOLIDAY_APPLICATION_LIMIT } from "@/constants/visa";
import { uuid } from "@/lib/uuid";
import { PrivateCollegeStory } from "./model";
import { createStoryName } from "@/core/story/BaseStory";
import { TemplateOption } from "@/core/calendar/BaseCalendar";
import { BaseEvent, initEvent } from "@/core/event/BaseEvent";
import { BaseResource, initResource } from "@/core/resource/BaseResource";
import { createRange, resetHHMMssmm, startOfMonth } from "@/lib/date";

type CreatePublicCollegeStoryParams = {
  startDate: Date;
  calendarId: string;
  canWorkingholiday: boolean;
};
export const createPublicCollegeStory = (
  { startDate, calendarId, canWorkingholiday }: CreatePublicCollegeStoryParams,
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

type DoCreateStoryParams = {
  calendarId: string;
  storyId: string;
  startDate: Date;
  canWorkingholiday: boolean;
};
const doCreateStory = (
  {
    calendarId,
    storyId,
    startDate: originalStartDate,
    canWorkingholiday,
  }: DoCreateStoryParams,
  options: TemplateOption
) => {
  let resources = [] as BaseResource[];
  let events = [] as BaseEvent[];

  const { schoolPeriod, pgwpPeriod, workingholidayPeriod } = options;
  const withPgwp = pgwpPeriod > 0;
  const startDate = resetHHMMssmm(originalStartDate);
  let start, end;

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
  [start, end] = createRange(addMonths(startDate, -9), 1);
  events.push(
    initEvent({
      ...EVENTS.TASK.COLLEGE_APPLICATION,
      id: uuid(),
      resourceId: collegeApplicationId,
      storyId,
      start: start.toISOString(),
      end: end.toISOString(),
      extendedProps: {
        resourceId: collegeApplicationId,
        calendarId,
        storyId,
        description:
          EVENTS.TASK.COLLEGE_APPLICATION.description ??
          EVENTS.TASK.COLLEGE_APPLICATION.title,
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
  [start, end] = createRange(addMonths(startDate, -8), 1);
  events.push(
    initEvent({
      ...EVENTS.TASK.PAYMENT,
      id: uuid(),
      resourceId: paymentId,
      storyId,
      start: start.toISOString(),
      end: end.toISOString(),
      extendedProps: {
        resourceId: paymentId,
        calendarId,
        storyId,
        description:
          EVENTS.TASK.PAYMENT.description ?? EVENTS.TASK.PAYMENT.title,
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
  [start, end] = createRange(addMonths(startDate, -7), 1);
  events.push(
    initEvent({
      ...EVENTS.TASK.READY_FOR_VISA_APPLICATION,
      id: uuid(),
      resourceId: readyForVisaApplicationId,
      storyId,
      start: start.toISOString(),
      end: end.toISOString(),
      extendedProps: {
        resourceId: readyForVisaApplicationId,
        calendarId,
        storyId,
        description:
          EVENTS.TASK.READY_FOR_VISA_APPLICATION.description ??
          EVENTS.TASK.READY_FOR_VISA_APPLICATION.title,
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
  [start, end] = createRange(addMonths(startDate, -6), 1);
  events.push(
    initEvent({
      ...EVENTS.TASK.BIOMETORICS,
      id: uuid(),
      resourceId: biometricsId,
      storyId,
      start: start.toISOString(),
      end: end.toISOString(),
      extendedProps: {
        resourceId: biometricsId,
        calendarId,
        storyId,
        description:
          EVENTS.TASK.BIOMETORICS.description ?? EVENTS.TASK.BIOMETORICS.title,
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
  [start, end] = createRange(addMonths(startDate, -5), 1);
  events.push(
    initEvent({
      ...EVENTS.TASK.READY_FOR_GOING,
      id: uuid(),
      resourceId: readyForGoingId,
      storyId,
      start: start.toISOString(),
      end: end.toISOString(),
      extendedProps: {
        resourceId: readyForGoingId,
        calendarId,
        storyId,
        description:
          EVENTS.TASK.READY_FOR_GOING.description ??
          EVENTS.TASK.READY_FOR_GOING.title,
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
  [start, end] = createRange(addMonths(startDate, -4), 1);
  events.push(
    initEvent({
      ...EVENTS.TASK.LAST_CHECK,
      id: uuid(),
      resourceId: lastCheckId,
      storyId,
      start: start.toISOString(),
      end: end.toISOString(),
      extendedProps: {
        resourceId: lastCheckId,
        calendarId,
        storyId,
        description:
          EVENTS.TASK.LAST_CHECK.description ?? EVENTS.TASK.LAST_CHECK.title,
      },
    })
  );

  // StudyVisa
  const studyVisaResourceId = uuid();
  resources.push(
    initResource({
      ...RESOURCES.VISA.STUDY,
      id: studyVisaResourceId,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 201,
    })
  );
  [start, end] = createRange(startDate, schoolPeriod);
  events.push(
    initEvent({
      ...EVENTS.VISA.STUDY,
      id: uuid(),
      resourceId: studyVisaResourceId,
      storyId,
      start: startDate.toISOString(),
      end: end.toISOString(),
      extendedProps: {
        resourceId: studyVisaResourceId,
        calendarId,
        storyId,
        description: "",
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
        [NAME_OF_ORDER]: 202,
      })
    );
    [start, end] = createRange(addMonths(startDate, schoolPeriod), pgwpPeriod);
    events.push(
      initEvent({
        ...EVENTS.VISA.PGWP,
        id: uuid(),
        resourceId: pgwpVisaResourceId,
        storyId,
        start: start.toISOString(),
        end: end.toISOString(),
        extendedProps: {
          resourceId: pgwpVisaResourceId,
          calendarId,
          storyId,
          description: "",
        },
      })
    );
  }

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
    [start, end] = createRange(dateAsStartWorkingHoliday, workingholidayPeriod);
    events.push(
      initEvent({
        ...EVENTS.VISA.WORKING_HOLIDAY,
        id: uuid(),
        resourceId: workingholidayResourceId,
        storyId,
        start: start.toISOString(),
        end: end.toISOString(),
        extendedProps: {
          resourceId: workingholidayResourceId,
          calendarId,
          storyId,
          description: "",
        },
      })
    );
    end = addDays(start, -1);
    start = startOfMonth(
      setMonth(
        addYears(dateAsStartWorkingHoliday, -1),
        MONTH_OF_WORKING_HOLIDAY_APPLICATION_LIMIT
      )
    );
    events.push(
      initEvent({
        ...EVENTS.VISA.READY_WORKING_HOLIDAY,
        id: uuid(),
        resourceId: workingholidayResourceId,
        storyId,
        start: start.toISOString(),
        end: end.toISOString(),
        extendedProps: {
          resourceId: workingholidayResourceId,
          calendarId,
          storyId,
          description: "",
        },
      })
    );
  }

  // BOWP or PNP Visa
  const bowpOrPnpVisa = uuid();
  resources.push(
    initResource({
      ...RESOURCES.VISA.BOWP_OR_PNP,
      id: bowpOrPnpVisa,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 204,
    })
  );
  [start, end] = createRange(
    addMonths(startDate, schoolPeriod + workingholidayPeriod + pgwpPeriod - 4),
    10
  );
  events.push(
    initEvent({
      ...EVENTS.VISA.BOWP_OR_PNP,
      id: uuid(),
      resourceId: bowpOrPnpVisa,
      storyId,
      start: start.toISOString(),
      end: end.toISOString(),
      extendedProps: {
        resourceId: bowpOrPnpVisa,
        calendarId,
        storyId,
        description: "",
      },
    })
  );

  // PR Visa
  const prVisa = uuid();
  resources.push(
    initResource({
      ...RESOURCES.VISA.PR,
      id: prVisa,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 205,
    })
  );
  [start, end] = createRange(
    addMonths(startDate, schoolPeriod + workingholidayPeriod + pgwpPeriod + 6),
    12 * 2
  );
  events.push(
    initEvent({
      ...EVENTS.VISA.PR,
      id: uuid(),
      resourceId: prVisa,
      storyId,
      start: start.toISOString(),
      end: end.toISOString(),
      extendedProps: {
        resourceId: prVisa,
        calendarId,
        storyId,
        description: "",
      },
    })
  );

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
  [start, end] = createRange(
    addMonths(startDate, schoolPeriod),
    pgwpPeriod + workingholidayPeriod + 6 + 2 * 12
  );
  events.push(
    initEvent({
      ...EVENTS.STATUS.WORKER,
      id: uuid(),
      resourceId: statusResourceId,
      storyId,
      start: start.toISOString(),
      end: end.toISOString(),
      extendedProps: {
        resourceId: statusResourceId,
        calendarId,
        storyId,
        description: "",
      },
    })
  );
  [start, end] = createRange(startDate, schoolPeriod);
  events.push(
    initEvent({
      ...EVENTS.STATUS.STUDENTS,
      id: uuid(),
      resourceId: statusResourceId,
      storyId,
      start: startDate.toISOString(),
      end: end.toISOString(),
      extendedProps: {
        resourceId: statusResourceId,
        calendarId,
        storyId,
        description: "",
      },
    })
  );

  // PR Application
  const prApplicationResourceId = uuid();
  resources.push(
    initResource({
      ...RESOURCES.TASK.PR_APPLICATION,
      id: prApplicationResourceId,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 301,
    })
  );
  [start, end] = createRange(
    addMonths(startDate, schoolPeriod + pgwpPeriod + workingholidayPeriod - 6),
    2
  );
  events.push(
    initEvent({
      ...EVENTS.TASK.PR_APPLICATION,
      id: uuid(),
      resourceId: prApplicationResourceId,
      storyId,
      start: start.toISOString(),
      end: end.toISOString(),
      extendedProps: {
        resourceId: prApplicationResourceId,
        calendarId,
        storyId,
        description:
          EVENTS.TASK.PR_APPLICATION.description ??
          EVENTS.TASK.PR_APPLICATION.title,
      },
    })
  );

  // PR waiting
  const prWaitingForAcceptance = uuid();
  resources.push(
    initResource({
      ...RESOURCES.TASK.PR_WAITING_FOR_ACCEPTANCE,
      id: prWaitingForAcceptance,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 302,
    })
  );
  [start, end] = createRange(
    addMonths(startDate, schoolPeriod + pgwpPeriod + workingholidayPeriod - 4),
    10
  );
  events.push(
    initEvent({
      ...EVENTS.TASK.PR_WAITING_FOR_APPLICATION,
      id: uuid(),
      resourceId: prWaitingForAcceptance,
      storyId,
      start: start.toISOString(),
      end: end.toISOString(),
      extendedProps: {
        resourceId: prWaitingForAcceptance,
        calendarId,
        storyId,
        description:
          EVENTS.TASK.PR_WAITING_FOR_APPLICATION.description ??
          EVENTS.TASK.PR_WAITING_FOR_APPLICATION.title,
      },
    })
  );

  // PR Acceptance
  const prAcceptance = uuid();
  resources.push(
    initResource({
      ...RESOURCES.TASK.PR_ACCEPTANCE,
      id: prAcceptance,
      calendarId,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 303,
    })
  );
  [start, end] = createRange(
    addMonths(startDate, schoolPeriod + pgwpPeriod + workingholidayPeriod + 6),
    1
  );
  events.push(
    initEvent({
      ...EVENTS.TASK.PR_ACCEPTANCE,
      id: uuid(),
      resourceId: prAcceptance,
      storyId,
      start: start.toISOString(),
      end: end.toISOString(),
      extendedProps: {
        resourceId: prAcceptance,
        calendarId,
        storyId,
        description:
          EVENTS.TASK.PR_ACCEPTANCE.description ??
          EVENTS.TASK.PR_ACCEPTANCE.title,
      },
    })
  );

  return [[...resources], [...events]] as [BaseResource[], BaseEvent[]];
};
