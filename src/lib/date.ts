import { getYear, getMonth, getDate, parseISO } from "date-fns";

const paddingZero = (num: number) => String(num).padStart(2, "0");

export const convertIsoToDateTime = (isoStr: string | Date) => {
  const date = typeof isoStr === "string" ? new Date(isoStr) : isoStr;
  const YYYY = getYear(date);
  const MM = paddingZero(getMonth(date) + 1);
  const dd = paddingZero(getDate(date));
  return `${YYYY}-${MM}-${dd}`;
};

export const convertIsoToYearAndMonth = (_date: Date | string) => {
  const date = typeof _date === "string" ? parseISO(_date) : _date;
  console.log("convertIsoToYearAndMonth|", _date, ">>", date);
  const YYYY = getYear(date);
  const MM = paddingZero(getMonth(date) + 1);
  return `${YYYY}-${MM}`;
};
