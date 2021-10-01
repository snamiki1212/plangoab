import Dialog from "@mui/material/Dialog";
import { CollegeCalendarSection } from "@/components/v2/x1_molecules/CollegeCalendarSection";

type Props = { isOpen: boolean; onClose: () => void };

export const TemplateSelectionModal: React.VFC<Props> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} fullWidth maxWidth="xl" onClose={onClose}>
      <CollegeCalendarSection />
    </Dialog>
  );
};
