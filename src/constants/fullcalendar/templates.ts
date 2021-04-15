import { FIELD } from "./settings";

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
    SUBMIT_APPLICATION: {
      [FIELD]: "✅Submit Application",
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
    LAST_CHECK: {
      [FIELD]: "✅Last Check",
      eventBorderColor: DARK_BLUE,
    },
    PERMANENT_RESIDENT: {
      [FIELD]: "✅Permanent Resident",
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
    PR_APPLICATION: {
      title: "🌎Application",
      backgroundColor: EVENT_TASK_BG,
    },
    PR_WAITING_FOR_APPLICATION: {
      title: "🌎Waiting for application",
      backgroundColor: EVENT_TASK_BG,
    },
    PR_Acceptance: {
      title: "🌎Acceptance",
      backgroundColor: EVENT_TASK_BG,
    },
  },
};
