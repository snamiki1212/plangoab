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
        "・ID Photo\n・Bank statement\n・Apply Visa\n（・Medical Checkup for only childminder）",
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
