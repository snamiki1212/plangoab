import { BaseStory } from "./BaseStroy";
import { uuid } from "../../lib/uuid";
import { addMonths, addYears, setMonth } from "date-fns";
import {
  RESOURCE_TEMPLATE__VISA_STUDY,
  RESOURCE_TEMPLATE__VISA_COOP,
  RESOURCE_TEMPLATE__WORKING_HOLIDAY_COOP,
  RESOURCE_TEMPLATE__STUDENT_STATUS,
  RESOURCE_TEMPLATE__WORKER_STATUS,
} from "../../constants/fullcalendar/templates";
import {
  NAME_OF_STORY_ID,
  NAME_OF_ORDER,
} from "../../constants/fullcalendar/settings";

const VISA_BACKGROUND_COLOR = "#8fbc8b";
const STATUS_BACKGROUND_COLOR = "#ffd700";
const WH_WARN_BACKGROUND_COLOR = "#e73758";

export class CommunityCollegeAfterwardsWorkingHolidayStory
  implements BaseStory {
  private _periodMonths = 12 * 2 + 12 * 1; // schoolePeriod + WorkingholidayPeroid
  private _events;
  private _resources;
  private _storyId;

  constructor(startDate: Date) {
    this._storyId = uuid();
    const [resources, events] = this.createStory(this._storyId, startDate);
    this._resources = resources;
    this._events = events;
  }

  private createStory(storyId: string, startDate: Date) {
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
      start: startDate,
      end: addMonths(startDate, 12 * 2),
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
      start: startDate,
      end: addMonths(startDate, 12 * 2),
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
      start: dateAsStartWorkingHoliday,
      end: addMonths(dateAsStartWorkingHoliday, 12 * 1),
      [NAME_OF_ORDER]: 3,
      backgroundColor: VISA_BACKGROUND_COLOR,
    };
    const preWorkingHolidayVisaEvent = {
      id: uuid(),
      resourceId: workingholidayResourceId,
      start: setMonth(addYears(dateAsStartWorkingHoliday, -1), 8),
      end: dateAsStartWorkingHoliday,
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
    const studentStatusVisa = {
      id: uuid(),
      resourceId: studentStatusResourceId,
      start: startDate,
      end: addMonths(startDate, 12 * 2),
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
    const workerStatusVisa = {
      id: uuid(),
      resourceId: workerStatusResourceId,
      start: addMonths(startDate, 12 * 1),
      end: addMonths(startDate, 12 * 3),
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
      studentStatusVisa,
      workerStatusVisa,
    ];
    return [resources, events] as const;
  }

  get events() {
    return this._events;
  }

  get resources() {
    return this._resources;
  }

  get periodMonths() {
    return this._periodMonths;
  }
}
