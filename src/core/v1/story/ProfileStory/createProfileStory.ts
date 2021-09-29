import { ProfileStory } from "./model";
import { PROFILE_ID } from "@/constants/fullcalendar";
import { createProfileResources } from "@/core/v1/resource/createProfileResources";
import { createProfileEvents } from "@/core/v1/event/createProfileEvents";
import { createDate } from "@/lib/date";

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
