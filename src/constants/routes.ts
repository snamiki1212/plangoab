export const ROUTES = {
  HOME: "/home",
  DEPRECATED_CALENDARS__NEW: "/",
  CALENDARS__LIST: "/calendars",
  CALENDARS__NEW: "/calendars/create",
  CALENDARS__DETAIL: (id: number) => `/calendars/${id}`,
} as const;
