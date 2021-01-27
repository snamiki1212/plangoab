import React from "react";
import { getRangeNumbers } from "../lib/age";
import { addMonths } from "date-fns";
import { uuid } from "../lib/uuid";
import { EventInput } from "@fullcalendar/react";
import {
  RESOURCE_ID__SHARED__AGE,
  RESOURCE_ID__SHARED__LIMIT,
} from "../constants/resourceIds";

const getLastYear = () => {
  const BUFFER_YEAR = 10;

  let d = new Date();
  d.setFullYear(d.getFullYear() + BUFFER_YEAR);
  return d.getFullYear();
};

const convertIsoToDateTime = (isoStr: string) => isoStr.split("T")[0];

export const useAgeEvents = () => {
  const [ageEvents, setAgeEvents] = React.useState<EventInput[]>([]);

  const calc = React.useCallback((birthday: string | Date) => {
    const birthDate = new Date(birthday);

    // get year num
    const endYear = getLastYear();
    const startYear = new Date(birthday).getFullYear();

    // create years list
    const years = getRangeNumbers(startYear, endYear);

    const start = (() => {
      const year = years[0];
      birthDate.setFullYear(year);
      const isoStr = birthDate.toISOString();
      const str = convertIsoToDateTime(isoStr);
      return str;
    })();
    const end = (() => {
      const year = years[31]; // working holiday have to be applied by age of 31.
      birthDate.setFullYear(year);
      const birthStr = birthDate.toISOString();
      const endDate = addMonths(new Date(birthStr), +11);
      const isoStr = endDate.toISOString();
      const str = convertIsoToDateTime(isoStr);
      return str;
    })();

    const e = {
      id: uuid(),
      resourceId: RESOURCE_ID__SHARED__LIMIT,
      title: "Limitation till WorkingHoliday",
      start,
      end,
    };

    // create EventInput obj
    const ageEventList = years.map<EventInput>((year, index) => {
      const start = (() => {
        birthDate.setFullYear(year);
        const isoStr = birthDate.toISOString();
        const str = convertIsoToDateTime(isoStr);
        return str;
      })();

      const isoStr = addMonths(new Date(start), +11).toISOString();
      const end = convertIsoToDateTime(isoStr);

      return {
        id: uuid(),
        resourceId: RESOURCE_ID__SHARED__AGE,
        title: `Aage:${index}`,
        start,
        end,
      };
    });

    setAgeEvents([e, ...ageEventList]);
  }, []);

  return [ageEvents, calc] as const;
};
