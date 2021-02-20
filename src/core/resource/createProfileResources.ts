import { DARK_BLUE } from "../../constants/fullcalendar/templates";
import {
  FIELD,
  NAME_OF_STORY_ID,
  NAME_OF_ORDER,
} from "../../constants/fullcalendar/settings";
import {
  // PROFILE_ID,
  RESOURCE_ID__SHARED__AGE,
  RESOURCE_ID__SHARED__LIMIT,
} from "../../constants/fullcalendar/settings";
import { BaseResource } from "./BaseResource";

export const createProfileResources = ({
  calendarId,
  storyId,
}: {
  calendarId: string;
  storyId: string;
}): BaseResource[] => [
  {
    id: RESOURCE_ID__SHARED__AGE,
    [FIELD]: "Age",
    [NAME_OF_STORY_ID]: storyId,
    [NAME_OF_ORDER]: 0,
    calendarId,
    eventBorderColor: DARK_BLUE,
  },
  {
    id: RESOURCE_ID__SHARED__LIMIT,
    [FIELD]: "Working Holiday",
    [NAME_OF_STORY_ID]: storyId,
    [NAME_OF_ORDER]: 1,
    calendarId,
    eventBorderColor: DARK_BLUE,
  },
];
