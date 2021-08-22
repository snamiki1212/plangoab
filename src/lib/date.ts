import {
  getYear,
  getMonth,
  parseISO,
  startOfMonth as naitveStartOfMonth,
  addMonths,
  addDays,
} from "date-fns";

const paddingZero = (num: number) => String(num).padStart(2, "0");

export const renderYYYYMMfromStr = (_date: Date | string) => {
  const date = typeof _date === "string" ? parseISO(_date) : _date;
  const YYYY = getYear(date);
  const MM = paddingZero(getMonth(date) + 1);
  return `${YYYY}-${MM}`;
};

// Dont use this function. Use toISOString() directly.
export const DEPRECATED_convertDateToIso = (date: any) => {
  return createDate(date).toISOString();
};

export const createDate = (...arg: any) => {
  const date = arg.length == 0 ? new Date() : new Date(arg);
  const reseted = resetHHMMssmm(date);
  return reseted;
};

export const resetHHMMssmm = (date: Date) => {
  date.setHours(0, 0, 0, 0); // reset hour/min/sec/ms
  return date;
};

export const startOfMonth = (date: Date) => {
  return createDate(naitveStartOfMonth(date));
};

// for FullCalendar when selecting
export const convertDateSelectArgToRange = (
  naiveStart: Date,
  naiveEnd: Date
) => {
  const start = startOfMonth(naiveStart);
  const end = startOfMonth(naiveEnd);
  return [start, end] as const;
};

export const createRange = (date: Date, range: number) => {
  const start = startOfMonth(date);
  const end = startOfMonth(addMonths(date, range <= 0 ? 1 : range));
  return [start, end] as const;
};

// for FullCalendar when updating
export const convertUpdateFC = (naiveStart?: Date, naiveEnd?: Date) => {
  const start = naiveStart ? startOfMonth(naiveStart) : naiveStart;

  // sometimes 'end' date is unstable. e.g. naiveEnd might be Feb 01 / Feb 02 / Jan 31
  const buffer = 5;
  const end = naiveEnd ? startOfMonth(addDays(naiveEnd, buffer)) : naiveEnd;
  return [start, end] as const;
};
