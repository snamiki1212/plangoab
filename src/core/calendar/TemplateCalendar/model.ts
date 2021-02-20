import { BaseCalendar } from "../BaseCalendar";
import {
  COMMUNITY_COLLEGE_CALENDAR_ID,
  PUBLIC_COLLEGE_CALENDAR_ID,
} from "../../../constants/fullcalendar/settings";

export type PrivateCollegeCalendar = BaseCalendar;
export type PublicCollegeCalendar = BaseCalendar;

export const PRIVATE_COLLEGE_CALENDAR_ID = COMMUNITY_COLLEGE_CALENDAR_ID;
export { PUBLIC_COLLEGE_CALENDAR_ID };
