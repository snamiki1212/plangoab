import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectEventModal, selectEvent } from "../../redux/ui/eventModal";
import { useEvent } from "../../hooks/useEvent";
import { BaseEvent } from "../../core/event/BaseEvent";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function EventModal({ isOpen, onClose }: Props) {
  const eventModal = useSelector(selectEventModal);
  const event = useSelector(selectEvent);

  const { remove, update } = useEvent();

  const onRemove = React.useCallback(() => {
    if (!eventModal) {
      return console.warn("Invalid data status when to update event.");
    }
    remove(eventModal);
    onClose();
  }, [eventModal, remove, onClose]);

  const onUpdate = React.useCallback(
    (data: Partial<BaseEvent>) => {
      if (!eventModal || !event) {
        return console.warn("Invalid data status when to remove event.");
      }
      update(eventModal, event, data);
      onClose();
    },
    [eventModal, event, update, onClose]
  );

  // TODO: error handler
  const { register, handleSubmit } = useForm();

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>Event</DialogTitle>
      <DialogContent dividers={true}>
        <form onSubmit={handleSubmit(onUpdate)}>
          <TextField
            inputRef={register}
            name={"title"}
            defaultValue={event?.title}
            label="Title"
            variant="outlined"
          />
          <Button type="submit">rename</Button>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onRemove} variant="contained" color="secondary">
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
}
