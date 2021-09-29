import { Factory } from "fishery";

type EventModal = {
  calendarId: string;
  storyId: string;
  eventId: string;
};

export const eventModalFactory = Factory.define<EventModal>(() => ({
  calendarId: "calendarId",
  storyId: "storyId",
  eventId: "eventId",
}));
