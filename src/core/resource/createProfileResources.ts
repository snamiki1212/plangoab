import {
  NAME_OF_STORY_ID,
  NAME_OF_ORDER,
} from "@/constants/fullcalendar/settings";
import {
  RESOURCE_ID__SHARED__AGE,
  RESOURCE_ID__SHARED__LIMIT,
} from "@/constants/fullcalendar/settings";
import { RESOURCES } from "@/constants/fullcalendar/templates";
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
