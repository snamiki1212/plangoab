import { NAME_OF_STORY_ID, NAME_OF_ORDER, FIELD } from "./settings";

export const MY_TIME_LINE_NAME = "MY_TIME_LINE_NAME";

export const AGE_OF_START_STORY = 21;

// const slotLabelFormat = { year: "numeric", month: "numeric" };

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
} as const;

const styleConfigs = {
  // NOTE: if no height props, another calendar after opening tab would become 0 height
  height: 600,

  // NOTE: Because of capture feature. When to open preview page, need this setting.
  resourceAreaWidth: "250px",
};

const resourceAreaColumns = [
  {
    field: FIELD,
  },
];

export const FULL_CALENDAR_CONFIGS = {
  views,
  // slotLabelFormat,
  resourceAreaColumns,
  ...initialView,
  ...resourceGroupField,
  ...schedulerLicenseKey,
  ...nowIndicator,
  ...resourceConfigs,
  ...styleConfigs,
} as const;
