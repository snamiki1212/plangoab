/************************
 * CONSTANT NAME
 ************************/
// field name
export const FIELD = "FIELD";

// keys
export const NAME_OF_STORY_ID = "storyId";
export const NAME_OF_ORDER = "order";
export const RESOURCE_NAME_KEY = "RESOURCE_NAME_KEY";

// calendar ID
export const PRIVATE_COLLEGE_CALENDAR_ID = "PRIVATE_COLLEGE_CALENDAR_ID";
export const PUBLIC_COLLEGE_CALENDAR_ID = "PUBLIC_COLLEGE_CALENDAR_ID";

// story ID
export const PROFILE_ID = "PROFILE_ID";

// resouce ID
export const RESOURCE_ID__SHARED__AGE = "RESOURCE_ID__SHARED__AGE";
export const RESOURCE_ID__SHARED__LIMIT = "RESOURCE_ID__SHARED__LIMIT";

export const MY_TIME_LINE_NAME = "MY_TIME_LINE_NAME";
export const AGE_OF_START_STORY = 21;

/************************
 * Configs
 ************************/
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

/************************
 * Color
 ************************/
export const DARK_BLUE = "#00008b";
const GREEN = "#206a5d";
// const YELLOW = "#ffd700";
const RED = "#c70039";
const PURPLE = "#440a67";

const EVENT_VISA_BG = GREEN;
const EVENT_STATUS_BG = DARK_BLUE;
const EVENT_TASK_BG = PURPLE;

/************************
 * Resources
 ************************/
export const RESOURCES = {
  PROFILE: {
    AGE: {
      [FIELD]: "🔢Age",
      eventBorderColor: DARK_BLUE,
    },
    WORKING_HOLIDAY: {
      [FIELD]: "🌎Working Holiday",
      eventBorderColor: DARK_BLUE,
    },
  },
  VISA: {
    STUDY: {
      [FIELD]: "📝Study VISA",
      eventBorderColor: DARK_BLUE,
    },
    COOP: {
      [FIELD]: "📝Co-op VISA",
      eventBorderColor: DARK_BLUE,
    },
    WORKING_HOLIDAY: {
      [FIELD]: "📝Working Holiday VISA",
      eventBorderColor: DARK_BLUE,
    },
    PGWP: {
      [FIELD]: "📝PGWP VISA",
      eventBorderColor: DARK_BLUE,
    },
    BOWP_OR_PNP: {
      [FIELD]: "📝BOWP or PNP VISA",
      eventBorderColor: DARK_BLUE,
    },
    PR: {
      [FIELD]: "📝Permament Resident VISA",
      eventBorderColor: DARK_BLUE,
    },
  },
  TASK: {
    // before coming abroad
    COLLEGE_APPLICATION: {
      [FIELD]: "✅College Application",
      eventBorderColor: DARK_BLUE,
    },
    PAYMENT: {
      [FIELD]: "✅Payment",
      eventBorderColor: DARK_BLUE,
    },
    READY_FOR_VISA_APPLICATION: {
      [FIELD]: "✅Ready for Visa Application",
      eventBorderColor: DARK_BLUE,
    },
    BIOMETRICS: {
      [FIELD]: "✅Biometrics",
      eventBorderColor: DARK_BLUE,
    },
    READY_FOR_GOING: {
      [FIELD]: "✅Ready for Going",
      eventBorderColor: DARK_BLUE,
    },
    LAST_CHECK: {
      [FIELD]: "✅Last Check",
      eventBorderColor: DARK_BLUE,
    },

    // after college
    PR_APPLICATION: {
      [FIELD]: "✅PR Application",
      eventBorderColor: DARK_BLUE,
    },
    PR_WAITING_FOR_ACCEPTANCE: {
      [FIELD]: "✅PR Waiting for Acceptance",
      eventBorderColor: DARK_BLUE,
    },
    PR_ACCEPTANCE: {
      [FIELD]: "✅PR Acceptance",
      eventBorderColor: DARK_BLUE,
    },
  },
  STATUS: {
    [FIELD]: "💁Status",
    eventBorderColor: DARK_BLUE,
  },
};

/************************
 * Events
 ************************/
export const EVENTS = {
  PROFILE: {
    AGE: (age: number) => ({
      title: `🔢Age:${age}`,
    }),
    WORKING_HOLIDAY: {
      title: "🌍Available Scope of WorkingHoliday",
    },
    WORKING_HOLIDAY_APPLICATION_LIMIT: {
      title: "🌍Application Limit",
    },
  },
  VISA: {
    COOP: {
      title: "🎓Co-op VISA",
      backgroundColor: EVENT_VISA_BG,
    },
    STUDY: {
      title: "✍️Study VISA",
      backgroundColor: EVENT_VISA_BG,
    },
    PGWP: {
      title: "🎓PGWP VISA",
      backgroundColor: EVENT_VISA_BG,
    },
    WORKING_HOLIDAY: {
      title: "🌎Working Holiday VISA",
      backgroundColor: EVENT_VISA_BG,
    },
    READY_WORKING_HOLIDAY: {
      title: "🏃‍♂️Ready for Working Holiday VISA",
      backgroundColor: RED,
    },
    BOWP_OR_PNP: {
      title: "🌎BOWP or PNP VISA",
      backgroundColor: EVENT_VISA_BG,
    },
    PR: {
      title: "🌎Permament Resident VISA",
      backgroundColor: EVENT_VISA_BG,
    },
  },
  STATUS: {
    WORKER: {
      title: "🧑🏻‍💼Worker",
      backgroundColor: EVENT_STATUS_BG,
    },
    STUDENTS: {
      title: "🧑‍🎓Student",
      backgroundColor: EVENT_STATUS_BG,
    },
  },
  TASK: {
    // before coming abroad
    COLLEGE_APPLICATION: {
      title: "✅",
      description: "・College Application\n・Agent Application",
      backgroundColor: EVENT_TASK_BG,
    },
    READY_FOR_GOING: {
      title: "✅",
      description:
        "・Decide day when to go\n・Get Insurance\n・Get Airline Ticket",
      backgroundColor: EVENT_TASK_BG,
    },
    LAST_CHECK: {
      title: "✅",
      description: "Final check before coming abroad",
      backgroundColor: EVENT_TASK_BG,
    },
    BIOMETORICS: {
      title: "✅",
      description: "・Register bio-metrics",
      backgroundColor: EVENT_TASK_BG,
    },
    READY_FOR_VISA_APPLICATION: {
      title: "✅",
      description:
        "・ID Photo\n・Bank statement\n・Apply Visa\n（・Medical checkup for only childcare worker）",
      backgroundColor: EVENT_TASK_BG,
    },
    PAYMENT: {
      title: "✅",
      description: "・Payment for Agent and School",
      backgroundColor: EVENT_TASK_BG,
    },

    // after college
    PR_APPLICATION: {
      title: "✅",
      description: "PR Application",
      backgroundColor: EVENT_TASK_BG,
    },
    PR_WAITING_FOR_APPLICATION: {
      title: "✅Waiting for Acceptance",
      description: "Waiting for Acceptance",
      backgroundColor: EVENT_TASK_BG,
    },
    PR_ACCEPTANCE: {
      title: "✅",
      description: "PR Acceptance",
      backgroundColor: EVENT_TASK_BG,
    },
  },
};

/************************
 * KEY
 ************************/
export const PLANGOAB_LICENSE_KEY = "freekey";
