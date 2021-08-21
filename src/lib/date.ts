import {
  getYear,
  getMonth,
  getDate,
  parseISO,
  endOfMonth as naiveEndOfMonth,
  startOfMonth as naitveStartOfMonth,
  addMonths,
} from "date-fns";

const paddingZero = (num: number) => String(num).padStart(2, "0");

export const renderYYYYMMfromStr = (_date: Date | string) => {
  const date = typeof _date === "string" ? parseISO(_date) : _date;
  const YYYY = getYear(date);
  const MM = paddingZero(getMonth(date) + 1);
  return `${YYYY}-${MM}`;
};

// Dont use this function. Use toISOString() directly.
export const DEPRECATED_convertDateToIso = (_date: Date | string) => {
  return typeof _date === "object" ? _date.toISOString() : _date;
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

export const endOfMonth = (date: Date) => {
  return createDate(naiveEndOfMonth(date));
};

export const startOfMonth = (date: Date) => {
  return createDate(naitveStartOfMonth(date));
};

export const createRange = (date: Date, range: number) => {
  const start = startOfMonth(date);
  const end = endOfMonth(addMonths(date, range <= 0 ? range : range - 1));
  return [start, end] as const;
};
