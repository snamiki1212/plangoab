import React from "react";
import { ProfileStory } from "../core/story/ProfileStory";

export const useProfileStory = () => {
  const [story, setStory] = React.useState<ProfileStory>();

  const init = React.useCallback((birthday: string | Date) => {
    const story = new ProfileStory(birthday);
    setStory(story);
  }, []);

  const events = React.useMemo(() => story?.events ?? [], [story]);
  const resources = React.useMemo(() => story?.resources ?? [], [story]);

  return [events, resources, init] as const;
};
