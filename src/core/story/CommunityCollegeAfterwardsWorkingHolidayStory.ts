import { BaseStory } from "./BaseStroy";
import { uuid } from "../../lib/uuid";
import { addMonths } from "date-fns";
import {
  RESOURCE_TEMPLATE__VISA_STUDY,
  RESOURCE_TEMPLATE__VISA_COOP,
  RESOURCE_TEMPLATE__WORKING_HOLIDAY_COOP,
  RESOURCE_TEMPLATE__STUDENT_STATUS,
  RESOURCE_TEMPLATE__WORKER_STATUS,
} from "../../constants/fullcalendar/templates";
export class CommunityCollegeAfterwardsWorkingHolidayStory
  implements BaseStory {
  private _periodMonths = 12 * 2 + 12 * 1; // schoolePeriod + WorkingholidayPeroid
  private _events;
  private _resources;
  private _groupId;

  constructor(startDate: Date) {
    this._groupId = uuid();
    const [resources, events] = this.createStory(this._groupId, startDate);
    this._resources = resources;
    this._events = events;
  }

  private createStory(groupId: string, startDate: Date) {
    // Coop Visa
    const coopVisaResourceId = uuid();
    const coopVisaResource = {
      ...RESOURCE_TEMPLATE__VISA_COOP,
      id: coopVisaResourceId,
      groupId,
    };
    const coopVisaEvent = {
      id: uuid(),
      resourceId: coopVisaResourceId,
      start: startDate,
      end: addMonths(startDate, 12 * 2),
    };

    // StudyVisa
    const studyVisaResourceId = uuid();
    const studyVisaResource = {
      ...RESOURCE_TEMPLATE__VISA_STUDY,
      id: studyVisaResourceId,
      groupId,
    };
    const studyVisaEvent = {
      id: uuid(),
      resourceId: studyVisaResourceId,
      start: startDate,
      end: addMonths(startDate, 12 * 2),
    };

    // Working-holiday Visa
    const workingholidayResourceId = uuid();
    const workingholidayResource = {
      ...RESOURCE_TEMPLATE__WORKING_HOLIDAY_COOP,
      id: workingholidayResourceId,
      groupId,
    };
    const workingholidayVisa = {
      id: uuid(),
      resourceId: workingholidayResourceId,
      start: addMonths(startDate, 12 * 2),
      end: addMonths(startDate, 12 * 3),
    };

    // student status
    const studentStatusResourceId = uuid();
    const studentStatusResource = {
      ...RESOURCE_TEMPLATE__STUDENT_STATUS,
      id: studentStatusResourceId,
      groupId,
    };
    const studentStatusVisa = {
      id: uuid(),
      resourceId: studentStatusResourceId,
      start: addMonths(startDate, 12 * 2),
      end: addMonths(startDate, 12 * 3),
    };

    // worker status
    const workerStatusResourceId = uuid();
    const workerStatusResource = {
      ...RESOURCE_TEMPLATE__WORKER_STATUS,
      id: workerStatusResourceId,
      groupId,
    };
    const workerStatusVisa = {
      id: uuid(),
      resourceId: workerStatusResourceId,
      start: addMonths(startDate, 12 * 2),
      end: addMonths(startDate, 12 * 3),
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
      workingholidayVisa,

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
