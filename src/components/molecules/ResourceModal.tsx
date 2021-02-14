import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
// 
import {useDispatch, useSelector} from 'react-redux'
import {pushAction, selectResource} from '../../redux/ui/resourceModal'

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function ResourceModal({ isOpen, onClose }: Props) {
  // const dispatch = useDispatch();
  const resource = useSelector(selectResource);

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>Resource</DialogTitle>
      <DialogContent dividers={true}>
        <Typography>this is content</Typography>
        <Typography>this is content</Typography>
        <div>{resource?.storyId}</div>
        <button>resource:remove</button>
        <button>resource:modify</button>
      </DialogContent>
    </Dialog>
  );
}
