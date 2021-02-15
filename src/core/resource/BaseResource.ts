import { uuid } from "../../lib/uuid";
import {
  NAME_OF_ORDER,
  NAME_OF_STORY_ID,
  FIELD_NAME,
} from "../../constants/fullcalendar/settings";

const H1 = FIELD_NAME["H1"];
const H2 = FIELD_NAME["H2"];

export type BaseResource = {
  id: string;
  [H1]: string;
  [H2]: string;
  [NAME_OF_STORY_ID]: string;
  [NAME_OF_ORDER]?: number;
  eventBorderColor?: string;
};

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

export const updateResource = (
  resource: BaseResource,
  params: Partial<Omit<BaseResource, "id" | "storyId">>
): BaseResource => {
  const order = params[NAME_OF_ORDER];
  const field1 = params[H1];
  const field2 = params[H2];

  const orderKey = NAME_OF_ORDER;
  const field1Key = FIELD_NAME["H1"];
  const field2Key = FIELD_NAME["H2"];

  const newResource = Object.assign(
    { ...resource },
    order !== undefined && { [orderKey]: order },
    field1 !== undefined && { [field1Key]: field1 },
    field2 !== undefined && { [field2Key]: field2 }
  );

  return newResource;
};
