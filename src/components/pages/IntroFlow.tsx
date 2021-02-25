import React from "react";
import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { useModal } from "../../hooks/useModal";
import { useUserCalendar } from "../../hooks/useUserCalendar";
import { useUser } from "../../hooks/useUser";
import { ProfileCard } from "../organisms/ProfileCard";
import { useTemplateOptions } from "../../hooks/useTemplateOptions";

export function IntroFlow() {
  const { isOpen, close } = useModal(true);
  const { init: initUserCalendar } = useUserCalendar();
  const { birth } = useUser();
  const { options } = useTemplateOptions();
  const workingholidayPeriod = React.useMemo(
    () => options.workingholidayPeriod,
    [options.workingholidayPeriod]
  );

  const handleFinish = React.useCallback(() => {
    initUserCalendar({ birthday: birth, workingholidayPeriod });
    close();
  }, [close, initUserCalendar, birth, workingholidayPeriod]);

  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <ProfileCard />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleFinish} variant="contained" color="primary">
          Create Calendar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
