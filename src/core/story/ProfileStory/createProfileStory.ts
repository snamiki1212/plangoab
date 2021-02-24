import { ProfileStory } from "./model";
import { PROFILE_ID } from "../../../constants/fullcalendar/settings";
import { createStoryName } from "../BaseStory";
import { createProfileResources } from "../../resource/createProfileResources";
import { createProfileEvents } from "../../event/createProfileEvents";

export const createProfileStory = ({
  birth,
}: {
  birth: string | Date;
}): ProfileStory => {
  const _birth = new Date(birth);
  const storyId = PROFILE_ID;
  return {
    id: storyId,
    calendarId: undefined,
    name: createStoryName(_birth),
    resources: createProfileResources({ storyId }),
    events: createProfileEvents({
      calendarId: undefined,
      storyId,
      startDate: _birth,
    }),
  };
};
