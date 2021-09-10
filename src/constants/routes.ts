export const ROUTES = {
  HOME: "/home",
  CALENDARS__NEW: "/",
  CALENDARS__LIST: "/calendars",
  CALENDARS__DETAIL: (id: number) => `/calendars/${id}`,
} as const;
