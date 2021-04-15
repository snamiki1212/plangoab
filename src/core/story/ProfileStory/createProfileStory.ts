import { ProfileStory } from "./model";
import { PROFILE_ID } from "../../../constants/fullcalendar/settings";
import { createProfileResources } from "../../resource/createProfileResources";
import { createProfileEvents } from "../../event/createProfileEvents";

const STORY_NAME = "Profile";

export const createProfileStory = ({
  birth,
  calendarId,
  workingholidayPeriod,
}: {
  birth: string | Date;
  calendarId: string;
  workingholidayPeriod: number;
}): ProfileStory => {
  const _birth = new Date(birth);
  const storyId = PROFILE_ID;
  const withWorkingholiday = workingholidayPeriod > 0;
  const resources = createProfileResources({
    calendarId,
    storyId,
    withWorkingholiday,
  });
  const events = createProfileEvents({
    calendarId,
    storyId,
    startDate: _birth,
    withWorkingholiday,
    workingholidayPeriod,
  });

  return {
    id: storyId,
    calendarId,
    name: STORY_NAME,
    resources,
    events,
  };
};
