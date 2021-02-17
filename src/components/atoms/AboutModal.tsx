import React, {PropsWithChildren} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function AboutModal({ isOpen, onClose, children }: PropsWithChildren<Props>) {
  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>About Plangoab</DialogTitle>
      <DialogContent dividers={true}>
        {children}
      </DialogContent>
    </Dialog>
  );
}

