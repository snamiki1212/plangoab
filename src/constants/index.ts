import { EventInput } from "@fullcalendar/react";
import {
  RESOURCE_ID__VISA__STUDY,
  RESOURCE_ID__VISA__COOP,
  RESOURCE_ID__VISA__WORKING_HOLIDAY,
  RESOURCE_ID__STATUS__WORKER,
  RESOURCE_ID__STATUS__STUDENT,
} from "./fullcalendar";

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
