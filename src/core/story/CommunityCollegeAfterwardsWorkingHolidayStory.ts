import { BaseStory } from "./BaseStroy";
import { uuid } from "../../lib/uuid";
import { addMonths } from "date-fns";
import {
  RESOURCE_TEMPLATE__VISA_STUDY,
  RESOURCE_TEMPLATE__VISA_COOP,
  RESOURCE_TEMPLATE__WORKING_HOLIDAY_COOP,
  // RESOURCE_TEMPLATE__STUDENT_STATUS,
  // RESOURCE_TEMPLATE__WORKER_STATUS,
} from "../../constants/fullcalendar";
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

    const resources = [
      coopVisaResource,
      studyVisaResource,
      workingholidayResource,
    ];
    const events = [coopVisaEvent, studyVisaEvent, workingholidayVisa];
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
