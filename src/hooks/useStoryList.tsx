import React from "react";
import { EventInput } from "@fullcalendar/react";
import {addYears, addMonths} from 'date-fns'
import { CommunityCollegeAfterwardsWorkingHolidayStory } from "../core/story/CommunityCollegeAfterwardsWorkingHolidayStory";
import {communityCollegeExample1} from '../constants/school';

type Resources = any;
type Story = any;

const startMonths = communityCollegeExample1.startMonths;

export const useStoryList = () => {
  const [stories, setStories] = React.useState<Story[]>([])

  const generate = React.useCallback((_birth: string) => {
    const birth = new Date(_birth);
    const startDate = addYears(birth, 27) // TODO:
    
    const startDatesInYear = startMonths.map(month => addMonths(startDate, month));
    const _stories = startDatesInYear.map(startDate => new CommunityCollegeAfterwardsWorkingHolidayStory(startDate))
    setStories(_stories)
  }, []);

  return { stories, generate } as const;
};
