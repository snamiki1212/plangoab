import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {
  selectEventModal,
  selectEvent,
} from "../../redux/ui/eventModal";
import { useEvent } from "../../hooks/useEvent";
import {BaseEvent} from '../../core/event/BaseEvent'

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
      <DialogTitle>Resource</DialogTitle>
      <DialogContent dividers={true}>
        <form onSubmit={handleSubmit(onUpdate)}>
          <input ref={register} name={'title'} defaultValue={event?.title} />
          <input type="submit" value="rename" />
        </form>
        <hr />
        <button onClick={onRemove}>Remove</button>
      </DialogContent>
    </Dialog>
  );
}
