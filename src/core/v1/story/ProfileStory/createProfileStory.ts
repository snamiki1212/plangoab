import { ProfileStory } from "./model";
import { PROFILE_ID } from "~/src/constants/fullcalendar";
import { createProfileResources } from "~/src/core/v1/resource/createProfileResources";
import { createProfileEvents } from "~/src/core/v1/event/createProfileEvents";
import { createDate } from "~/src/lib/date";

const STORY_NAME = "Profile";

type Args = {
  birth: string | Date;
  calendarId: string;
  workingholidayPeriod: number;
};
export const createProfileStory = ({
  birth,
  calendarId,
  workingholidayPeriod,
}: Args): ProfileStory => {
  const _birth = createDate(birth);
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
