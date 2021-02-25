import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { TemplateOption } from "./TemplateOption";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function TemplateOptionModal({ onClose, isOpen }: Props) {
  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>Template Option</DialogTitle>
      <DialogContent>
        <TemplateOption />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
