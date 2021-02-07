import { BaseCalendar } from "../BaseCalendar";
import { ProfileStory } from "../../story/ProfileStory/ProfileStory";

type Story = ProfileStory;

export type MyCalendar = BaseCalendar;

export const createMyCalendar = ({
  stories = [],
}: {
  stories?: Story[];
}): MyCalendar => {
  return {
    id: "todo", // TODO: change name
    stories,
  };
};
