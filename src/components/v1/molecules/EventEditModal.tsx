import React from "react";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectEventModal, selectEvent } from "~/src/redux/v1/ui/eventModal";
import { useEvent } from "~/src/hooks/v1/useEvent";
import { BaseEvent } from "~/src/core/v1/event/BaseEvent";

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
    <Dialog onClose={onClose} open={isOpen} fullWidth maxWidth="md">
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
              rows={10}
              maxRows={10}
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
