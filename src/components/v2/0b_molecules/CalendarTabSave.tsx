import { CalendarTab } from "~/src/components/v2/0a_atoms/CalendarTab";
import { useSaveModal } from "~/src/hooks/v2/useSaveModal";

export const CalendarTabSave = () => {
  const openModal = useSaveModal();
  return <CalendarTab title={"Save"} onClick={openModal} />;
};
