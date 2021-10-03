import { CalendarTab } from "~/src/components/v2/0a_atoms/CalendarTab";
import { useGoto } from "~/src/hooks/v2/useGoto";
import { ROUTES } from "~/src/constants/routes";

export const CalendarTawNew = () => {
  const goto = useGoto(ROUTES.CALENDARS__NEW);
  return <CalendarTab title={"New"} onClick={goto} />;
};
