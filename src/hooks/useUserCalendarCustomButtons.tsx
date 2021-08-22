import React from "react";
import styled from "styled-components";
import { useUserCalendar } from "@/hooks/useUserCalendar";
import { useStory } from "@/hooks/useStory";

export const ADD_STORY_BUTTON = "ADD_STORY_BUTTON";
export const REMOVE_CALENDAR_BUTTON = "REMOVE_CALENDAR_BUTTON";

export const useUserCalendarCustomButtons = () => {
  const { calendar, remove: removeUserCalendar } = useUserCalendar();
  const { create: createStory } = useStory();

  const handleAddStory = React.useCallback(() => {
    if (!calendar) return;
    const calendarId = calendar.id;
    createStory({ calendarId });
  }, [calendar, createStory]);

  const handleRemoveCalendar = React.useCallback(() => {
    if (!calendar) return;
    const calendarId = calendar.id;

    if (!window.confirm("Do you want to delete this calendar?")) return;
    removeUserCalendar(calendarId);
  }, [removeUserCalendar, calendar]);

  const customButtons = React.useMemo(
    () => ({
      [ADD_STORY_BUTTON]: {
        text: <Text>📝 Add story</Text>,
        click: handleAddStory,
      },
      [REMOVE_CALENDAR_BUTTON]: {
        text: <Text>🧹 Clear</Text>,
        click: handleRemoveCalendar,
      },
    }),
    [handleAddStory, handleRemoveCalendar]
  );

  return { customButtons };
};

const Text = styled.span`
  color: var(--base-dark1);
  font-family: var(--font-text1);
`;
