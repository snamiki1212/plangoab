import {
  NAME_OF_STORY_ID,
  NAME_OF_ORDER,
  RESOURCE_ID__SHARED__AGE,
  RESOURCE_ID__SHARED__LIMIT,
  RESOURCES,
} from "~/src/constants/fullcalendar";
import { BaseResource } from "./BaseResource";

type CreateProfileResourcesParams = {
  calendarId: string;
  storyId: string;
  withWorkingholiday: boolean;
};

export const createProfileResources = ({
  calendarId,
  storyId,
  withWorkingholiday,
}: CreateProfileResourcesParams): BaseResource[] => {
  const list = [
    {
      ...RESOURCES.PROFILE.AGE,
      id: RESOURCE_ID__SHARED__AGE,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 0,
      calendarId,
    },
  ];

  if (withWorkingholiday) {
    list.push({
      ...RESOURCES.PROFILE.WORKING_HOLIDAY,
      id: RESOURCE_ID__SHARED__LIMIT,
      [NAME_OF_STORY_ID]: storyId,
      [NAME_OF_ORDER]: 1,
      calendarId,
    });
  }

  return list;
};
