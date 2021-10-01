import { CalendarTab } from "@/components/v2/x0_atoms/CalendarTab";
import { useSaveModal } from "@/hooks/v2/useSaveModal";

export const SaveTab = () => {
  const openModal = useSaveModal();
  return (
    <div onClick={openModal}>
      <CalendarTab title={"Save"} />
    </div>
  );
};
