import React from "react";
import { UserCalendar } from "../organisms/UserCalendar";
import { usePreviewQuery, usePreviewCommand } from "../../hooks/usePreview";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

export function PreviewModal() {
  const { toggle } = usePreviewCommand();
  const { isOpen } = usePreviewQuery();
  return (
    <Dialog onClose={toggle} open={isOpen} fullScreen>
      <div style={{ overflowX: "scroll", width: "10000px", height: "10000px" }}>
        <Button onClick={toggle} variant="outlined">
          {"<< Back"}
        </Button>
        <UserCalendar isPreviewMode />
      </div>
    </Dialog>
  );
}
