import { ProfileStory } from "./model";
import { PROFILE_ID } from "../../../constants/fullcalendar/settings";
import { createStoryName } from "../BaseStory";
import { createProfileResources } from "../../resource/createProfileResources";
import { createProfileEvents } from "../../event/createProfileEvents";

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
    name: createStoryName(_birth),
    resources: createProfileResources({ calendarId, storyId }),
    events: createProfileEvents({ calendarId, storyId, startDate: _birth }),
  };
};
