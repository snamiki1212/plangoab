import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {
  selectResourceModal,
  selectResource,
} from "../../redux/ui/resourceModal";
import { FIELD1, FIELD2 } from "../../constants/fullcalendar/settings";
import { useResource } from "../../hooks/useResource";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function ResourceModal({ isOpen, onClose }: Props) {
  const resourceModal = useSelector(selectResourceModal);
  const resource = useSelector(selectResource);
  const field1 = (resource && resource[FIELD1]) ?? "";
  const field2 = (resource && resource[FIELD2]) ?? "";

  console.log("resource", resource);

  const { remove, update } = useResource();

  const onRemove = React.useCallback(() => {
    if (!resourceModal) {
      return console.warn("Invalid data status when to update resource.");
    }
    remove(resourceModal);
    onClose();
  }, [resourceModal, remove, onClose]);

  const onUpdate = React.useCallback(
    (data: { [FIELD1]: string; [FIELD2]: string }) => {
      if (!resourceModal) {
        return console.warn("Invalid data status when to remove resource.");
      }
      update(resourceModal, data);
      onClose();
    },
    [resourceModal, update, onClose]
  );

  // TODO: error handler
  // const { register, handleSubmit, errors } = useForm();
  const { register, handleSubmit } = useForm();

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>Resource</DialogTitle>
      <DialogContent dividers={true}>
        <form onSubmit={handleSubmit(onUpdate)}>
          <input ref={register} name={FIELD1} defaultValue={field1} />
          <input ref={register} name={FIELD2} defaultValue={field2} />
          <input type="submit" value="Update" />
        </form>
        <hr />
        <button onClick={onRemove}>Remove</button>
      </DialogContent>
    </Dialog>
  );
}
