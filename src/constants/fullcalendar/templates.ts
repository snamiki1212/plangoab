import { FIELD1, FIELD2 } from "./settings";

export const DARK_BLUE = "#00008b";

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
