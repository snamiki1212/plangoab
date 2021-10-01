import Dialog from "@mui/material/Dialog";
import { CollegeCalendarSection } from "@/components/v2/x2_feature/CollegeCalendarSection";

type Props = { isOpen: boolean };

export const TemplateSelectionModal: React.VFC<Props> = ({ isOpen }) => {
  return (
    <Dialog open={isOpen} fullWidth maxWidth="xl">
      <CollegeCalendarSection />
    </Dialog>
  );
};
