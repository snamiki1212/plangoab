import { CalendarTab } from "~/src/components/v2/0a_atoms/CalendarTab";
import { useSaveModal } from "~/src/hooks/v2/useSaveModal";

export const SaveTab = () => {
  const openModal = useSaveModal();
  return (
    <div onClick={openModal}>
      <CalendarTab title={"Save"} />
    </div>
  );
};
