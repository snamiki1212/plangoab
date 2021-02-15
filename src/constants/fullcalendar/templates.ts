import {
  FIELD1,
  FIELD2,
  RESOURCE_ID__SHARED__AGE,
  RESOURCE_ID__SHARED__LIMIT,
  NAME_OF_STORY_ID,
  PROFILE_ID,
} from "./settings";

const DARK_BLUE = "#00008b";

const FIELD__H1__SHARED = "SHARED";
const FIELD__H1__VISA = "VISA";
const FIELD__H1__STATUS = "STATUS";

export const RESOURCE_TEMPLATE__VISA_STUDY = {
  [FIELD1]: FIELD__H1__VISA,
  [FIELD2]: "Study VISA",
  eventBorderColor: DARK_BLUE,
};

export const RESOURCE_TEMPLATE__VISA_COOP = {
  [FIELD1]: FIELD__H1__VISA,
  [FIELD2]: "Co-op VISA",
  eventBorderColor: DARK_BLUE,
};

export const RESOURCE_TEMPLATE__WORKING_HOLIDAY_COOP = {
  [FIELD1]: FIELD__H1__VISA,
  [FIELD2]: "Working Holiday VISA",
  eventBorderColor: DARK_BLUE,
};

export const RESOURCE_TEMPLATE__STUDENT_STATUS = {
  [FIELD1]: FIELD__H1__STATUS,
  [FIELD2]: "Student",
  eventBorderColor: DARK_BLUE,
};

export const RESOURCE_TEMPLATE__WORKER_STATUS = {
  [FIELD1]: FIELD__H1__STATUS,
  [FIELD2]: "Worker",
  eventBorderColor: DARK_BLUE,
};

export const DEPRECATED_SHARED__RESOURCES = [
  {
    id: RESOURCE_ID__SHARED__AGE,
    [FIELD1]: FIELD__H1__SHARED,
    [FIELD2]: "Age",
    [NAME_OF_STORY_ID]: PROFILE_ID,
    eventBorderColor: DARK_BLUE,
  },
  {
    id: RESOURCE_ID__SHARED__LIMIT,
    [FIELD1]: FIELD__H1__SHARED,
    [FIELD2]: "Working Holiday Application Limit",
    [NAME_OF_STORY_ID]: PROFILE_ID,
    eventBorderColor: DARK_BLUE,
  },
];
