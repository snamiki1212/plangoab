import { uuid } from "@/lib/uuid";
import {
  NAME_OF_ORDER,
  NAME_OF_STORY_ID,
  FIELD,
} from "@/constants/fullcalendar";

export type BaseResource = {
  id: string;
  calendarId: string;
  [FIELD]: string;
  [NAME_OF_STORY_ID]: string;
  [NAME_OF_ORDER]?: number;
  eventBorderColor?: string;
};

export const initResource = (props?: Partial<BaseResource>): BaseResource => {
  const { id, calendarId, storyId, ...rest } = props ?? {};
  return {
    id: id ?? uuid(),
    calendarId: calendarId ?? uuid(),
    [NAME_OF_STORY_ID]: storyId ?? uuid(),
    [NAME_OF_ORDER]: 1,
    [FIELD]: "Field",
    ...rest,
  };
};
