import React from "react";
import { useForm } from "react-hook-form";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
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
  const story = useSelector(selectStory);
  const { register, handleSubmit } = useForm();
  const { remove: removeStory, update: updateStory } = useStory();
  const { push: pushResource } = useResource();

  const handleRemoveStory = React.useCallback(() => {
    if (!storyModal) {
      return console.warn("Invalid data status when to update resource.");
    }
    removeStory(storyModal);
    onClose();
  }, [storyModal, removeStory, onClose]);

  const handleRemoveResource = React.useCallback(() => {
    // TODO:
    alert("TODO: remove resource");
  }, []);

  const handleAddResource = React.useCallback(() => {
    if (!storyModal) {
      return console.warn("Invalid data status when to add resource.");
    }
    pushResource(storyModal);
    onClose();
  }, [storyModal, pushResource, onClose]);

  const handleNewStory = React.useCallback(() => {
    alert("TODO: new story");
  }, []);

  const onSubmit = React.useCallback(
    (data: any) => {
      if (!storyModal || !story) {
        return console.warn("Invalid data status when to update story.");
      }
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
          <input ref={register} name="name" defaultValue={story.name} />
          <input type="submit" value="Rename" />
        </form>
      </DialogTitle>

      <DialogContent dividers={true}>
        <div>
          <h2>Resources</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {story.resources.map((resource) => {
              return (
                <div>
                  <label>FIELD1</label>
                  <input defaultValue={resource[FIELD1]} />

                  <label>FIELD2</label>
                  <input defaultValue={resource[FIELD2]} />
                  <button onClick={handleRemoveResource}>- Remove</button>
                </div>
              );
            })}
            <button onClick={handleAddResource}>+ Add Resource</button>
            <input type="submit" value="Update" />
          </form>
        </div>
      </DialogContent>
      <DialogActions>
        <button onClick={handleRemoveStory}>Remove</button>
        <button onClick={handleNewStory}>Add New Story</button>
      </DialogActions>
    </Dialog>
  );
}
