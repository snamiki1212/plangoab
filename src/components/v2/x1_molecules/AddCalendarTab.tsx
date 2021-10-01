import { useTutorial } from "@/hooks/v2/useTutorial";
import { CalendarTab } from "@/components/v2/x0_atoms/CalendarTab";

export const AddCalendarTab = () => {
  const { gotoSelectionTemplate } = useTutorial();
  return (
    <div onClick={gotoSelectionTemplate}>
      <CalendarTab title="+" selected={false} />
    </div>
  );
};
