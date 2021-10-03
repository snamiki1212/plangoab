import { useRouter } from "next/router";

export const useCanEditCalendar = () => {
  const router = useRouter();
  const { id: calendarId } = router.query;
  const isNewPage = calendarId == undefined;
  const canEdit = isNewPage;
  return canEdit;
};
