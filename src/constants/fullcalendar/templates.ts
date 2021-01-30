import {
  FIELD_NAME,
  RESOURCE_ID__SHARED__AGE,
  RESOURCE_ID__SHARED__LIMIT,
  NAME_OF_GROUP_ID,
} from "./settings";

const DARK_BLUE = "#00008b";

const FIELD__H1__SHARED = "SHARED";
const FIELD__H1__VISA = "VISA";
const FIELD__H1__STATUS = "STATUS";

export const RESOURCE_TEMPLATE__VISA_STUDY = {
  [FIELD_NAME["H1"]]: FIELD__H1__VISA,
  [FIELD_NAME["H2"]]: "Study VISA",
  eventBorderColor: DARK_BLUE,
};

export const RESOURCE_TEMPLATE__VISA_COOP = {
  [FIELD_NAME["H1"]]: FIELD__H1__VISA,
  [FIELD_NAME["H2"]]: "Co-op VISA",
  eventBorderColor: DARK_BLUE,
};

export const RESOURCE_TEMPLATE__WORKING_HOLIDAY_COOP = {
  [FIELD_NAME["H1"]]: FIELD__H1__VISA,
  [FIELD_NAME["H2"]]: "Working Holiday VISA",
  eventBorderColor: DARK_BLUE,
};

export const RESOURCE_TEMPLATE__STUDENT_STATUS = {
  [FIELD_NAME["H1"]]: FIELD__H1__STATUS,
  [FIELD_NAME["H2"]]: "Student",
  eventBorderColor: DARK_BLUE,
};

export const RESOURCE_TEMPLATE__WORKER_STATUS = {
  [FIELD_NAME["H1"]]: FIELD__H1__STATUS,
  [FIELD_NAME["H2"]]: "Worker",
  eventBorderColor: DARK_BLUE,
};

// group id
const GROUP_ID__ALL = "ALL";

export const DEPRECATED_SHARED__RESOURCES = [
  // SHARED
  {
    id: RESOURCE_ID__SHARED__AGE,
    [FIELD_NAME["H1"]]: FIELD__H1__SHARED,
    [FIELD_NAME["H2"]]: "Age",
    [NAME_OF_GROUP_ID]: GROUP_ID__ALL,
    eventBorderColor: DARK_BLUE,
  },
  {
    id: RESOURCE_ID__SHARED__LIMIT,
    [FIELD_NAME["H1"]]: FIELD__H1__SHARED,
    [FIELD_NAME["H2"]]: "Working Holiday Application Limit",
    [NAME_OF_GROUP_ID]: GROUP_ID__ALL,
    eventBorderColor: DARK_BLUE,
  },
];
