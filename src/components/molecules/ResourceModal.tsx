import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
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

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function ResourceModal({ isOpen, onClose }: Props) {
  const dispatch = useDispatch();
  const resourceModal = useSelector(selectResourceModal);
  const resource = useSelector(selectResource);
  const [editing, setEditing] = React.useState<Partial<BaseResource>>(
    resource ?? {}
  );

  React.useEffect(() => {
    setEditing(resource ?? {});
  }, [resource]);

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

  const update = React.useCallback(() => {
    if (!resourceModal)
      return console.warn("Invalid data status when to update resource.");
    if (!resource)
      return console.warn("Invalid data status when to update resource.");

    const newResource = updateResource(resource, editing);
    dispatch(
      updateResourceAction({
        calendarId,
        storyId: resourceModal.storyId,
        newResource,
      })
    );
    onClose();
  }, [resource, resourceModal, editing, onClose]);

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>Resource</DialogTitle>
      <DialogContent dividers={true}>
        <Typography>this is content</Typography>
        <Typography>this is content</Typography>
        <div>{resourceModal?.storyId}</div>

        {/*  */}
        <div>
          <span>{FIELD_NAME["H1"]}</span>
          <input
            value={editing[FIELD_NAME["H1"]]}
            onChange={(e) => {
              setEditing((prev) => ({
                ...prev,
                [FIELD_NAME["H1"]]: e.target.value,
              }));
            }}
          />
        </div>
        {/*  */}
        <div>
          <span>{FIELD_NAME["H2"]}</span>
          <input
            value={editing[FIELD_NAME["H2"]]}
            onChange={(e) => {
              setEditing((prev) => ({
                ...prev,
                [FIELD_NAME["H2"]]: e.target.value,
              }));
            }}
          />
        </div>
        <button onClick={remove}>resource:remove</button>
        <button onClick={update}>resource:modify</button>
      </DialogContent>
    </Dialog>
  );
}
