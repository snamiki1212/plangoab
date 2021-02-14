import { uuid } from "../../lib/uuid";
import {
  NAME_OF_ORDER,
  NAME_OF_STORY_ID,
  FIELD_NAME,
} from "../../constants/fullcalendar/settings";

// TODO: define specific type
export type BaseResource = any;

export const initResource = (
  props?: Partial<BaseResource & { field1?: string; field2: string }>
): BaseResource => {
  const { id, storyId, field1, field2 } = props ?? {};
  return {
    id: id ?? uuid(),
    [NAME_OF_STORY_ID]: storyId ?? uuid(),
    [NAME_OF_ORDER]: 1,
    [FIELD_NAME["H1"]]: field1 ?? "No Field Name",
    [FIELD_NAME["H2"]]: field2 ?? "H2",
  };
};
