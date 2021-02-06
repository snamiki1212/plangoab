import { BaseStory } from "../story/BaseStroy";

type Story = BaseStory;
type Resource = any; // TODO:
type Event = any; // TODO:

export interface BaseCalendar {
  add: Function;
  removeEvent: Function;
  stories: Story[];
  resources: Resource[];
  events: Event[];
}
