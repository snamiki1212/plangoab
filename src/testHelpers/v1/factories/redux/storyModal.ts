import { Factory } from "fishery";

type StoryModal = {
  calendarId: string;
  storyId: string;
};

export const storyModalFactory = Factory.define<StoryModal>(() => ({
  calendarId: "calendarId",
  storyId: "storyId",
}));
