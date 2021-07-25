export const createDummyStoryModal = ({
  calendarId = "calendarId",
  storyId = "storyId",
}: {
  calendarId?: string;
  storyId?: string;
}) => ({
  calendarId,
  storyId,
});
