import React from "react";
import { UserCalendar } from "../organisms/UserCalendar";
import { ExplanationSection } from "../atoms/ExplanationSection";
import { usePreviewQuery, usePreviewCommand } from "@/hooks/v1/usePreview";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

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
        <br />
        <ExplanationSection />
      </div>
    </Dialog>
  );
}
