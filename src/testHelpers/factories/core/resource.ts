import { Factory } from "fishery";
import { BaseResource } from "@/core/resource/BaseResource";
import {
  NAME_OF_ORDER,
  NAME_OF_STORY_ID,
  FIELD,
} from "@/constants/fullcalendar";

const decorateId = (id: number) => `RESOURCE_${id}`;

export const resourceFactory = Factory.define<BaseResource>(({ sequence }) => ({
  id: decorateId(sequence),
  calendarId: "calendarId",
  [FIELD]: "field",
  [NAME_OF_STORY_ID]: "storyId",
  [NAME_OF_ORDER]: 2,
  eventBorderColor: "blue",
}));
