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
import { FIELD1, FIELD2 } from "../../constants/fullcalendar/settings";
import { useEvent } from "../../hooks/useEvent";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function EventModal({ isOpen, onClose }: Props) {
  const eventModal = useSelector(selectEventModal);
  // const event = useSelector(selectEvent);

  const { remove } = useEvent();

  const onRemove = React.useCallback(() => {
    if (!eventModal) {
      return console.warn("Invalid data status when to update event.");
    }
    remove(eventModal);
    onClose();
  }, [eventModal, remove, onClose]);

  // const onUpdate = React.useCallback(
  //   (data: { [FIELD1]: string; [FIELD2]: string }) => {
  //     if (!eventModal) {
  //       return console.warn("Invalid data status when to remove event.");
  //     }
  //     update(eventModal, data);
  //     onClose();
  //   },
  //   [eventModal, update, onClose]
  // );

  // TODO: error handler
  // const { register, handleSubmit } = useForm();

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>Resource</DialogTitle>
      <DialogContent dividers={true}>
        {/* <form onSubmit={handleSubmit(onUpdate)}>
          <input ref={register} name={FIELD1} defaultValue={field1} />
          <input ref={register} name={FIELD2} defaultValue={field2} />
          <input type="submit" value="Update" />
        </form> */}
        <hr />
        <button onClick={onRemove}>Remove</button>
      </DialogContent>
    </Dialog>
  );
}
