export const ROUTES = {
  HOME: "/",
  DEPRECATED_CALENDARS__NEW: "/calendars/createV1",
  CALENDARS__LIST: "/calendars",
  CALENDARS__NEW: "/calendars/create",
  CALENDARS__DETAIL: (id: number) => `/calendars/${id}`,
} as const;
