import React from "react";
import { useUserCalendar } from "./useUserCalendar";
import { useStory } from "./useStory";

export const ADD_STORY_BUTTON = "ADD_STORY_BUTTON";

export const useCustomButtons = () => {
  const { calendar } = useUserCalendar();
  const { create: createStory } = useStory();

  const handleAddStory = React.useCallback(() => {
    if (!calendar) return;
    const calendarId = calendar.id;
    createStory({ calendarId });
  }, [calendar]);

  const customButtons = React.useMemo(
    () => ({
      [ADD_STORY_BUTTON]: {
        text: "Add story",
        click: handleAddStory,
      },
    }),
    [handleAddStory]
  );

  return { customButtons };
};
