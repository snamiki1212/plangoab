import React from "react";
import { useForm } from "react-hook-form";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
// import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectStoryModal, selectStory } from "../../redux/ui/storyModal";
// import { FIELD1, FIELD2 } from "../../constants/fullcalendar/settings";
import { useStory } from "../../hooks/useStory";
import { useResource } from "../../hooks/useResource";
import { FIELD1, FIELD2 } from "../../constants/fullcalendar/settings";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function StoryModal({ isOpen, onClose }: Props) {
  const storyModal = useSelector(selectStoryModal);
  const calendarId = storyModal?.calendarId;
  const story = useSelector(selectStory);
  const { register, handleSubmit } = useForm();
  const {
    create: createStory,
    remove: removeStory,
    update: updateStory,
  } = useStory();
  const { push: pushResource, remove: removeResource } = useResource();

  const handleRemoveStory = React.useCallback(() => {
    if (!storyModal) {
      return console.warn("Invalid data status when to update resource.");
    }
    removeStory(storyModal);
    onClose();
  }, [storyModal, removeStory, onClose]);

  const handleRemoveResource = React.useCallback(
    (resourceId: string) => () => {
      if (!storyModal) {
        return console.warn("Invalid data status when to remove resource.");
      }
      removeResource({ ...storyModal, resourceId });
    },
    [storyModal, removeResource]
  );

  const handleAddResource = React.useCallback(() => {
    if (!storyModal) {
      return console.warn("Invalid data status when to add resource.");
    }
    pushResource(storyModal);
  }, [storyModal, pushResource]);

  const handleNewStory = React.useCallback(() => {
    if (!calendarId) return;
    createStory({ calendarId });
  }, [calendarId]);

  const onSubmit = React.useCallback(
    (data: any) => {
      if (!storyModal || !story) {
        return console.warn("Invalid data status when to update story.");
      }
      console.log('data', data, story)
      updateStory(storyModal, story, data);
      onClose();
    },
    [updateStory, storyModal, story, onClose]
  );

  // // TODO: error handler
  // // const { register, handleSubmit, errors } = useForm();
  // const { register, handleSubmit } = useForm();

  if (!story) return <></>;

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Story Name</label>
          <input ref={register} name="name" defaultValue={story.name} />
        </form>
      </DialogTitle>

      <DialogContent dividers={true}>
        <div>
          <h2>Resources</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {story.resources.map((resource, idx) => {
              const fieldName = `resources[${idx}]`;
              return (
                <fieldset name={fieldName} key={fieldName}>
                  <input type="hidden" name={`${fieldName}.id`} ref={register} value={resource.id} />
                  <label>FIELD1</label>
                  <input
                    defaultValue={resource[FIELD1]}
                    ref={register}
                    name={`${fieldName}.${FIELD1}`}
                  />

                  <label>FIELD2</label>
                  <input
                    defaultValue={resource[FIELD2]}
                    ref={register}
                    name={`${fieldName}.${FIELD2}`}
                  />
                  <Button
                    onClick={handleRemoveResource(resource.id)}
                    color="secondary"
                    variant="contained"
                  >
                    Delete
                  </Button>
                </fieldset>
              );
            })}
            <Button
              onClick={handleAddResource}
              variant="contained"
              color="primary"
            >
              + Add Resource
            </Button>
            <input type="submit" value="Update" />
          </form>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleRemoveStory}
          color="secondary"
          variant="contained"
        >
          Delete
        </Button>
        <Button onClick={handleNewStory} color="primary">
          Add New Story
        </Button>
      </DialogActions>
    </Dialog>
  );
}
