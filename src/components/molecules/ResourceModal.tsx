import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
//
import { useForm } from "react-hook-form";
//
import { useSelector } from "react-redux";
import {
  selectResourceModal,
  selectResource,
} from "../../redux/ui/resourceModal";
import { FIELD_NAME } from "../../constants/fullcalendar/settings";
import { useResource } from "../../hooks/useResource";

const H1 = FIELD_NAME["H1"];
const H2 = FIELD_NAME["H2"];

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function ResourceModal({ isOpen, onClose }: Props) {
  const resourceModal = useSelector(selectResourceModal);
  const resource = useSelector(selectResource);
  const h1 = (resource && resource[H1]) ?? "";
  const h2 = (resource && resource[H2]) ?? "";

  const { remove, update } = useResource();

  const onRemove = React.useCallback(() => {
    if (!resourceModal) {
      return console.warn("Invalid data status when to update resource.");
    }
    remove(resourceModal);
    onClose();
  }, [resourceModal, remove, onClose]);

  const onUpdate = React.useCallback(
    (data: { [H1]: string; [H2]: string }) => {
      if (!resourceModal) {
        return console.warn("Invalid data status when to remove resource.");
      }
      update(resourceModal, data);
      onClose();
    },
    [resourceModal, update, onClose]
  );

  // TODO: error handler
  const { register, handleSubmit, errors } = useForm();

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>Resource</DialogTitle>
      <DialogContent dividers={true}>
        <form onSubmit={handleSubmit(onUpdate)}>
          <input ref={register} name={FIELD_NAME["H1"]} defaultValue={h1} />
          <input ref={register} name={FIELD_NAME["H2"]} defaultValue={h2} />
          <input type="submit" value="Update" />
        </form>
        <hr />
        <button onClick={onRemove}>Remove</button>
      </DialogContent>
    </Dialog>
  );
}
