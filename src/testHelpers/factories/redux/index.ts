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

export const createDummyEventModal = () => ({
  calendarId: "calendarId",
  storyId: "storyId",
  eventId: "eventId",
});
