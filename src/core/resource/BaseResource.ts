import { uuid } from "../../lib/uuid";
import {
  NAME_OF_ORDER,
  NAME_OF_STORY_ID,
  FIELD1,
  FIELD2,
} from "../../constants/fullcalendar/settings";

export type BaseResource = {
  id: string;
  calendarId: string;
  [FIELD1]: string;
  [FIELD2]: string;
  [NAME_OF_STORY_ID]: string;
  [NAME_OF_ORDER]?: number;
  eventBorderColor?: string;
};

export const initResource = (props?: Partial<BaseResource>): BaseResource => {
  const { id, calendarId, storyId } = props ?? {};
  return {
    id: id ?? uuid(),
    calendarId: calendarId ?? uuid(),
    [NAME_OF_STORY_ID]: storyId ?? uuid(),
    [NAME_OF_ORDER]: 1,
    [FIELD1]: "Field1",
    [FIELD2]: "Field2",
  };
};

export const updateResource = (
  resource: BaseResource,
  params: Partial<Omit<BaseResource, "id" | "storyId">>
): BaseResource => {
  const order = params[NAME_OF_ORDER];
  const field1 = params[FIELD1];
  const field2 = params[FIELD2];

  const orderKey = NAME_OF_ORDER;
  const field1Key = FIELD1;
  const field2Key = FIELD2;

  const newResource = Object.assign(
    { ...resource },
    order !== undefined && { [orderKey]: order },
    field1 !== undefined && { [field1Key]: field1 },
    field2 !== undefined && { [field2Key]: field2 }
  );

  return newResource;
};
