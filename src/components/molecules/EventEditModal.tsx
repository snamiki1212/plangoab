import React from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectEventModal, selectEvent } from "@/redux/ui/eventModal";
import { useEvent } from "@/hooks/useEvent";
import { BaseEvent } from "@/core/event/BaseEvent";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function EventEditModal({ isOpen, onClose }: Props) {
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
      <form onSubmit={handleSubmit(onUpdate)}>
        <DialogContent dividers={true}>
          <Flex>
            <TextField
              inputRef={register}
              name={"title"}
              defaultValue={event?.title}
              label="Title"
              variant="outlined"
            />
            <TextField
              multiline
              rows={3}
              rowsMax={10}
              inputRef={register}
              name={"extendedProps.description"}
              defaultValue={event?.extendedProps.description}
              label="Description"
              variant="outlined"
            />
          </Flex>
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant="contained" color="primary">
            UPDATE
          </Button>
          <Button onClick={onRemove} variant="contained" color="secondary">
            Remove
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

const Flex = styled.div`
  display: grid;
  gap: 2rem;
`;
