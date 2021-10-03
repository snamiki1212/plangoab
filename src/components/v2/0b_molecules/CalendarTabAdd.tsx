import { useTutorial } from "~/src/hooks/v2/useTutorial";
import { CalendarTab } from "~/src/components/v2/0a_atoms/CalendarTab";

export const CalendarTabAdd = () => {
  const { gotoSelectionTemplate } = useTutorial();
  return (
    <CalendarTab title="+" selected={false} onClick={gotoSelectionTemplate} />
  );
};
