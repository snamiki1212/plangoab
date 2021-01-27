export const MY_TIME_LINE = "MY_TIME_LINE";

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
export const RESOURCE_GROUP_FIELD_ID = "groupId";

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
    group: true,
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
    duration: { year: 6 },
    buttonText: "TIME_LINE",
    startStr: "2019-01-01",
  },
};

export const resources = [
  // SHARED
  {
    id: RESOURCE_ID__SHARED__AGE,
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["SHARED"],
    [FIELD_NAME["H2"]]: "Age",
    [RESOURCE_GROUP_FIELD_ID]: "XXX",
  },
  {
    id: RESOURCE_ID__SHARED__LIMIT,
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["SHARED"],
    [FIELD_NAME["H2"]]: "Working Holiday Application Limit",
    [RESOURCE_GROUP_FIELD_ID]: "XXX",
  },

  // VISA
  {
    id: RESOURCE_ID__VISA__STUDY,
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["VISA"],
    [FIELD_NAME["H2"]]: "Study VISA",
    [RESOURCE_GROUP_FIELD_ID]: "YYY",
  },
  {
    id: RESOURCE_ID__VISA__COOP,
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["VISA"],
    [FIELD_NAME["H2"]]: "Co-op VISA",
    [RESOURCE_GROUP_FIELD_ID]: "YYY",
  },
  {
    id: RESOURCE_ID__VISA__WORKING_HOLIDAY,
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["VISA"],
    [FIELD_NAME["H2"]]: "Working Holiday VISA",
    [RESOURCE_GROUP_FIELD_ID]: "YYY",
  },

  // STATUS
  {
    id: RESOURCE_ID__STATUS__STUDENT,
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["STATUS"],
    [FIELD_NAME["H2"]]: "Student",
    [RESOURCE_GROUP_FIELD_ID]: "ZZZ",
  },
  {
    id: RESOURCE_ID__STATUS__WORKER,
    [FIELD_NAME["H1"]]: FIELD__H1__LIST["STATUS"],
    [FIELD_NAME["H2"]]: "Worker",
    [RESOURCE_GROUP_FIELD_ID]: "ZZZ",
  },

  // ETC
  {
    id: "etc",
    [FIELD_NAME["H1"]]: "CUSTOM_CATEGORY",
    [FIELD_NAME["H2"]]: "CUSTOM_EVENT",
  },
];
