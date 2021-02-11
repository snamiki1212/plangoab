import React from 'react'
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";

type Props = {
  isOpen: boolean,
  onClose: () => void
}

export function AboutModal({isOpen, onClose}:Props){
  return(
    <Dialog onClose={onClose} open={isOpen}>
        <DialogTitle>About Plangoab</DialogTitle>
        <DialogContent dividers={true}>
          <Typography>this is content</Typography>
          <Typography>this is content</Typography>
        </DialogContent>
      </Dialog>
  )
}