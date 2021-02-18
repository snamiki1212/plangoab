import { NAME_OF_STORY_ID, NAME_OF_ORDER, FIELD1, FIELD2 } from "./settings";

export const MY_TIME_LINE_NAME = "MY_TIME_LINE_NAME";

export const AGE_OF_START_STORY = 21;

const slotLabelFormat = [{ year: "numeric" }, { month: "numeric" }];

const headerToolbar = {
  left: "today prev,next",
  center: "title",
  right: `${MY_TIME_LINE_NAME},listMonth`,
} as const;

const initialView = { initialView: MY_TIME_LINE_NAME } as const;

const resourceGroupField = { resourceGroupField: NAME_OF_STORY_ID } as const;

const schedulerLicenseKey = {
  schedulerLicenseKey: "GPL-My-Project-Is-Open-Source",
} as const;

const views = {
  [MY_TIME_LINE_NAME]: {
    type: "resourceTimelineYear",
    duration: { year: 15 },
    buttonText: "TIME_LINE",
  },
} as const;

const nowIndicator = {
  nowIndicator: true,
} as const;

const resourceConfigs = {
  resourceOrder: NAME_OF_ORDER,
  resourcesInitiallyExpanded: false,
} as const;

const styleConfigs = {
  height: 700,
};

const resourceAreaColumns = [
  {
    field: FIELD1,
    headerContent: "Field1",
  },
  {
    field: FIELD2,
    headerContent: "Field2",
  },
];

export const FULL_CALENDAR_CONFIGS = {
  views,
  headerToolbar,
  slotLabelFormat,
  resourceAreaColumns,
  ...initialView,
  ...resourceGroupField,
  ...schedulerLicenseKey,
  ...nowIndicator,
  ...resourceConfigs,
  ...styleConfigs,
} as const;
