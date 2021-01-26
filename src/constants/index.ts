import { EventInput } from "@fullcalendar/react";
import {
  RESOURCE_ID__SHARED__AGE,
  RESOURCE_ID__VISA__STUDY,
  RESOURCE_ID__VISA__COOP,
  RESOURCE_ID__VISA__WORKING_HOLIDAY,
  RESOURCE_ID__STATUS__WORKER,
  RESOURCE_ID__STATUS__STUDENT,
} from "./resourceIds";

export const FIELD__H1__LIST = {
  SHARED: "SHARED",
  VISA: "VISA",
  STATUS: "STATUS",
} as const;

export const FIELD_NAME = {
  H1: "FIELD__H1",
  H2: "FIELD__H2",
} as const;

export const resourceAreaColumns = [
  {
    group: true,
    field: FIELD_NAME["H1"],
    headerContent: "Category",
  },
  {
    field: FIELD_NAME["H2"],
    headerContent: "Event",
  },
];

export const MY_TIME_LINE = "MY_TIME_LINE";

export const views = {
  [MY_TIME_LINE]: {
    type: "resourceTimelineYear",
    duration: { year: 6 },
    buttonText: "TIME_LINE",
    startStr: "2019-01-01",
  },
};

export const headerToolbar = {
  left: "today prev,next",
  center: "title",
  right: `${MY_TIME_LINE},listMonth`,
};

export const resources = [
  // SHARED
  {
    id: RESOURCE_ID__SHARED__AGE,
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["SHARED"],
    [FIELD_NAME["H2"]]: "Age",
  },

  // VISA
  {
    id: RESOURCE_ID__VISA__STUDY,
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["VISA"],
    [FIELD_NAME["H2"]]: "Study VISA",
  },
  {
    id: RESOURCE_ID__VISA__COOP,
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["VISA"],
    [FIELD_NAME["H2"]]: "Co-op VISA",
  },
  {
    id: RESOURCE_ID__VISA__WORKING_HOLIDAY,
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["VISA"],
    [FIELD_NAME["H2"]]: "Working Holiday VISA",
  },

  // STATUS
  {
    id: RESOURCE_ID__STATUS__STUDENT,
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["STATUS"],
    [FIELD_NAME["H2"]]: "Student",
  },
  {
    id: RESOURCE_ID__STATUS__WORKER,
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["STATUS"],
    [FIELD_NAME["H2"]]: "Worker",
  },

  // ETC
  {
    id: "etc",
    [FIELD_NAME["H1"]]: "CUSTOM_CATEGORY",
    [FIELD_NAME["H2"]]: "CUSTOM_EVENT",
  },
];

export const events: EventInput[] = [
  {
    id: "1",
    resourceId: RESOURCE_ID__VISA__STUDY,
    start: "2020-11-20",
    end: "2023-01-01",
  },
  {
    id: "2",
    resourceId: RESOURCE_ID__VISA__COOP,
    start: "2022-01-01",
    end: "2023-01-01",
  },
  {
    id: "3",
    resourceId: RESOURCE_ID__VISA__WORKING_HOLIDAY,
    start: "2022-06-01",
    end: "2023-06-01",
  },

  // STATUS
  {
    id: "4",
    resourceId: RESOURCE_ID__STATUS__STUDENT,
    start: "2020-11-20",
    end: "2023-01-01",
  },
  {
    id: "5",
    resourceId: RESOURCE_ID__STATUS__WORKER,
    start: "2022-01-01",
    end: "2023-06-01",
  },
];

export const slotLabelFormat = [{ year: "numeric" }, { month: "numeric" }];
