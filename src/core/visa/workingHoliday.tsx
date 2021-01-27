import {getYear, setYear, addYears} from 'date-fns'
import {WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE} from '../../constants/visa'

const WORKING_HOLIDAY_PERIOD = 1;

export const getStartYearDate = (endYearDate: Date) => {
  return addYears(endYearDate, -WORKING_HOLIDAY_PERIOD)
}

export const getLastYearDate = (birth:Date) => {
  const birthYear = getYear(birth)
  const lastYear = birthYear + WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE;
  const date = setYear(birth, lastYear);
  return date;
}