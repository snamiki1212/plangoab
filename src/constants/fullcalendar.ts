export const MY_TIME_LINE = "MY_TIME_LINE";

// group id
const GROUP_ID__ALL = "ALL";

// resouce ID
export const RESOURCE_ID__SHARED__AGE = "RESOURCE_ID__SHARED__AGE";
export const RESOURCE_ID__SHARED__LIMIT = "RESOURCE_ID__SHARED__LIMIT";
export const RESOURCE_ID__VISA__STUDY = "RESOURCE_ID__VISA__STUDY";
export const RESOURCE_ID__VISA__COOP = "RESOURCE_ID__VISA__COOP";
export const RESOURCE_ID__VISA__WORKING_HOLIDAY =
  "RESOURCE_ID__VISA__WORKING_HOLIDAY";
export const RESOURCE_ID__STATUS__WORKER = "RESOURCE_ID__STATUS__WORKER";
export const RESOURCE_ID__STATUS__STUDENT = "RESOURCE_ID__STATUS__STUDENT";

// resource-group-field ID
export const GROUP_ID = "GROUP_ID";

export const slotLabelFormat = [{ year: "numeric" }, { month: "numeric" }];

export const headerToolbar = {
  left: "today prev,next",
  center: "title",
  right: `${MY_TIME_LINE},listMonth`,
} as const;

export const FIELD__H1__LIST = {
  SHARED: "SHARED",
  VISA: "VISA",
  STATUS: "STATUS",
} as const;

export const FIELD_NAME = {
  H1: "FIELD__H1",
  H2: "FIELD__H2",
} as const;

export const resourceAreaColumns = [
  {
    field: FIELD_NAME["H1"],
    headerContent: "Category",
  },
  {
    field: FIELD_NAME["H2"],
    headerContent: "Event",
  },
];

export const views = {
  [MY_TIME_LINE]: {
    name: "timeline",
    type: "resourceTimelineYear",
    duration: { year: 15 },
    buttonText: "TIME_LINE",
    startStr: "2019-01-01",
  },
};

const DARK_BLUE = "#00008b";

export const SHARED__RESOURCES = [
  // SHARED
  {
    id: RESOURCE_ID__SHARED__AGE,
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["SHARED"],
    [FIELD_NAME["H2"]]: "Age",
    [GROUP_ID]: GROUP_ID__ALL,
    eventBorderColor: DARK_BLUE,
  },
  {
    id: RESOURCE_ID__SHARED__LIMIT,
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["SHARED"],
    [FIELD_NAME["H2"]]: "Working Holiday Application Limit",
    [GROUP_ID]: GROUP_ID__ALL,
    eventBorderColor: DARK_BLUE,
  },
];
export const TEMPLATE__RESOURCES = [
  // VISA
  {
    id: "__REPLACE_ME__",
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["VISA"],
    [FIELD_NAME["H2"]]: "Study VISA",
    [GROUP_ID]: "__REPLACE_ME__",
    eventBorderColor: DARK_BLUE,
    name: RESOURCE_ID__VISA__STUDY,
  },
  {
    id: "__REPLACE_ME__",
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["VISA"],
    [FIELD_NAME["H2"]]: "Co-op VISA",
    [GROUP_ID]: "__REPLACE_ME__",
    eventBorderColor: DARK_BLUE,
    name: RESOURCE_ID__VISA__STUDY,
  },
  {
    id: "__REPLACE_ME__",
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["VISA"],
    [FIELD_NAME["H2"]]: "Working Holiday VISA",
    [GROUP_ID]: "__REPLACE_ME__",
    eventBorderColor: DARK_BLUE,
    name: RESOURCE_ID__VISA__STUDY,
  },

  // STATUS
  {
    id: "__REPLACE_ME__",
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["STATUS"],
    [FIELD_NAME["H2"]]: "Student",
    [GROUP_ID]: "__REPLACE_ME__",
    eventBorderColor: DARK_BLUE,
    name: RESOURCE_ID__VISA__STUDY,
  },
  {
    id: "__REPLACE_ME__",
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["STATUS"],
    [FIELD_NAME["H2"]]: "Worker",
    [GROUP_ID]: "__REPLACE_ME__",
    eventBorderColor: DARK_BLUE,
    name: RESOURCE_ID__VISA__STUDY,
  },

  // ETC
  {
    id: "__REPLACE_ME__",
    [FIELD_NAME["H1"]]: "_CUSTOM",
    [FIELD_NAME["H2"]]: "_CUSTOM_EVENT",
    eventBorderColor: DARK_BLUE,
    [GROUP_ID]: "__REPLACE_ME__",
    name: RESOURCE_ID__VISA__STUDY,
  },
];
