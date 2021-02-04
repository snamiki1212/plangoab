import { BaseStory } from "../story/BaseStroy";
type Story = BaseStory;

export class MyCalendar {
  #stories: Story[];
  constructor(initialStories: Story[]) {
    this.#stories = initialStories;
  }

  add(story: Story) {}
  remove(id: string) {}

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
