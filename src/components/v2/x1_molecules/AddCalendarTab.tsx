import { useTutorial } from "~/src/hooks/v2/useTutorial";
import { CalendarTab } from "~/src/components/v2/x0_atoms/CalendarTab";

export const AddCalendarTab = () => {
  const { gotoSelectionTemplate } = useTutorial();
  return (
    <div onClick={gotoSelectionTemplate}>
      <CalendarTab title="+" selected={false} />
    </div>
  );
};
