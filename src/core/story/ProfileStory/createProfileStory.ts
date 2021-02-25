import { ProfileStory } from "./model";
import { PROFILE_ID } from "../../../constants/fullcalendar/settings";
import { createProfileResources } from "../../resource/createProfileResources";
import { createProfileEvents } from "../../event/createProfileEvents";

const STORY_NAME = "Profile";

export const createProfileStory = ({
  birth,
  calendarId,
}: {
  birth: string | Date;
  calendarId: string;
}): ProfileStory => {
  const _birth = new Date(birth);
  const storyId = PROFILE_ID;
  return {
    id: storyId,
    calendarId,
    name: STORY_NAME,
    resources: createProfileResources({ calendarId, storyId }),
    events: createProfileEvents({ calendarId, storyId, startDate: _birth }),
  };
};
