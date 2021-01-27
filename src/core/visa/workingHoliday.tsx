import {getYear, setYear} from 'date-fns'
import {WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE} from '../../constants/visa'

export const getLastYearDate = (birth:Date) => {
  const birthYear = getYear(birth)
  const lastYear = birthYear + WORKING_HOLIDAY_APPLICATION_LIMITATION_AGE;
  const date = setYear(birth, lastYear);
  return date;
}