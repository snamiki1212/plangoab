import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
//
import { useForm } from "react-hook-form";
//
import { useDispatch, useSelector } from "react-redux";
import {
  pushAction,
  selectResourceModal,
  selectResource,
} from "../../redux/ui/resourceModal";
import {
  removeResourceAction,
  updateResourceAction,
} from "../../redux/features/userCalendars";
import { MY_CALENDAR_ID } from "../../constants/fullcalendar/settings";
import { BaseResource, updateResource } from "../../core/resource/BaseResource";
import {
  NAME_OF_ORDER,
  NAME_OF_STORY_ID,
  FIELD_NAME,
} from "../../constants/fullcalendar/settings";

const H1 = FIELD_NAME["H1"];
const H2 = FIELD_NAME["H2"];

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function ResourceModal({ isOpen, onClose }: Props) {
  const dispatch = useDispatch();
  const resourceModal = useSelector(selectResourceModal);
  const resource = useSelector(selectResource);

  const calendarId = MY_CALENDAR_ID;

  const remove = React.useCallback(() => {
    if (!resourceModal)
      return console.warn("Invalid data status when to remove resource.");
    if (!window.confirm("Do you remove this resource?")) return;

    dispatch(
      removeResourceAction({
        resourceId: resourceModal.resourceId,
        storyId: resourceModal.storyId,
        calendarId,
      })
    );
    onClose();
  }, [resourceModal, onClose]);

  const update = React.useCallback(
    (params: Partial<BaseResource>) => {
      if (!resourceModal)
        return console.warn("Invalid data status when to update resource.");
      if (!resource)
        return console.warn("Invalid data status when to update resource.");

      const newResource = updateResource(resource, params);
      dispatch(
        updateResourceAction({
          calendarId,
          storyId: resourceModal.storyId,
          newResource,
        })
      );
      onClose();
    },
    [resource, resourceModal, onClose]
  );

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: { [H1]: string; [H2]: string }) => {
    console.log("data", data);
    update(data);
  };

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>Resource</DialogTitle>
      <DialogContent dividers={true}>
        <Typography>this is content</Typography>
        <Typography>this is content</Typography>
        <div>{resourceModal?.storyId}</div>
        <button onClick={remove}>resource:remove</button>
        {/*  */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input ref={register} name={FIELD_NAME["H1"]} />
          <input ref={register} name={FIELD_NAME["H2"]} />
          <input type="submit" value="update" />
        </form>
      </DialogContent>
    </Dialog>
  );
}
