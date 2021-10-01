import { Factory } from "fishery";
import { BaseStory } from "~/src/core/v1/story/BaseStory";
import { eventFactory } from "./event";
import { resourceFactory } from "./resource";

const decorateId = (id: number) => `STORY_${id}`;

export const storyFactory = Factory.define<BaseStory>(
  ({ sequence, associations, params }) => {
    const { calendarId } = params;
    const storyId = decorateId(sequence);
    const extendedProps = {
      calendarId,
      storyId,
      description: "description",
    };
    return {
      id: storyId,
      calendarId: calendarId || "calendarId",
      events:
        associations.events || eventFactory.buildList(3, { extendedProps }),
      resources:
        associations.resources || resourceFactory.buildList(3, { storyId }),
      name: "name",
    };
  }
);
