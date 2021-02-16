import React from "react";
import { useForm } from "react-hook-form";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
// import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectStoryModal, selectStory } from "../../redux/ui/storyModal";
// import { FIELD1, FIELD2 } from "../../constants/fullcalendar/settings";
import { useStory } from "../../hooks/useStory";
import { useResource } from "../../hooks/useResource";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function StoryModal({ isOpen, onClose }: Props) {
  const storyModal = useSelector(selectStoryModal);
  const story = useSelector(selectStory);
  // const field1 = (resource && resource[FIELD1]) ?? "";
  // const field2 = (resource && resource[FIELD2]) ?? "";

  const { remove: removeStory, update: updateStory } = useStory();
  const { push: pushResource } = useResource();

  const handleRemove = React.useCallback(() => {
    if (!storyModal) {
      return console.warn("Invalid data status when to update resource.");
    }
    removeStory(storyModal);
    onClose();
  }, [storyModal, removeStory, onClose]);

  const handleAddResource = React.useCallback(() => {
    if (!storyModal) {
      return console.warn("Invalid data status when to add resource.");
    }
    pushResource(storyModal);
    onClose();
  }, [storyModal, pushResource, onClose]);

  const { register, handleSubmit } = useForm();

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

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>Resource</DialogTitle>
      <DialogContent dividers={true}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input ref={register} name="name" defaultValue={story?.name} />
          <input type="submit" value="rename" />
        </form>
        <button onClick={handleRemove}>remove</button>
        <button onClick={handleAddResource}>add resource</button>
        {/* <form onSubmit={handleSubmit(onUpdate)}>
          <input ref={register} name={FIELD1} defaultValue={field1} />
          <input ref={register} name={FIELD2} defaultValue={field2} />
          <input type="submit" value="Update" />
        </form>
        <hr />
        <button onClick={handleRemove}>Remove</button> */}
      </DialogContent>
    </Dialog>
  );
}
