import { uuid } from "../../lib/uuid";
import {addYears, addMonths} from 'date-fns'
import {WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE} from '../../constants/visa'

const MONTH_OF_WORKING_HOLIDAY_PERIOD = 12;

export const getStartYearDate = (endYearDate: Date) => {
  return addMonths(endYearDate, -MONTH_OF_WORKING_HOLIDAY_PERIOD)
}

export const getLastYearDate = (birth:Date) => {
  return addYears(birth, WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE);
}

const start = '2021-01-01';
const end = '2022-01-01';
export const createEvent = () => {
  const eventId = uuid();
  const event = {
    id: eventId,
    start,
    end,
  };
  return event
}