import { BaseStory } from "../story/BaseStroy";
import { BaseCalendar } from "../calendar/BaseCalendar";

type Story = BaseStory;

export class MyCalendar implements BaseCalendar {
  #stories: Story[];
  constructor(initialStories: Story[]) {
    this.#stories = initialStories;
  }

  add(story: Story) {}

  removeEvent(eventId: string) {
    this.#stories = this.#stories.map((story) => {
      story.removeEvent(eventId);
      return story;
    });
  }

  get stories() {
    return this.#stories;
  }

  get events() {
    return this.#stories.flatMap((story) => story.events);
  }

  get resources() {
    return this.#stories.flatMap((story) => story.resources);
  }
}
