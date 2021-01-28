import React from "react";
import { EventInput } from "@fullcalendar/react";
import {addYears} from 'date-fns'
import { CommunityCollegeAfterwardsWorkingHolidayStory } from "../core/story/CommunityCollegeAfterwardsWorkingHolidayStory";

type Resources = any;

export const useStoryList = () => {
  const [events, setEvents] = React.useState<EventInput[]>([]);
  const [resources, setResources] = React.useState<Resources[]>([]);

  const generate = React.useCallback((_birth: string) => {
    const birth = new Date(_birth);
    const startDate = addYears(birth, 27) // TODO:

    const story = new CommunityCollegeAfterwardsWorkingHolidayStory(startDate)

    setResources(story.resources);
    setEvents(story.events);
  }, []);

  return { events, resources, generate } as const;
};
