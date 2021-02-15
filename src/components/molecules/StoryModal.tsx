import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
// import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectStoryModal } from "../../redux/ui/storyModal";
// import { FIELD1, FIELD2 } from "../../constants/fullcalendar/settings";
import { useStory } from "../../hooks/useStory";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function StoryModal({ isOpen, onClose }: Props) {
  const storyModal = useSelector(selectStoryModal);
  // const story = useSelector(selectStory);
  // const field1 = (resource && resource[FIELD1]) ?? "";
  // const field2 = (resource && resource[FIELD2]) ?? "";

  const { remove } = useStory();

  const handleRemove = React.useCallback(() => {
    if (!storyModal) {
      return console.warn("Invalid data status when to update resource.");
    }
    remove(storyModal);
    onClose();
  }, [storyModal, remove, onClose]);

  // const onUpdate = React.useCallback(
  //   (data: { [FIELD1]: string; [FIELD2]: string }) => {
  //     if (!storyModal) {
  //       return console.warn("Invalid data status when to remove resource.");
  //     }
  //     update(storyModal, data);
  //     onClose();
  //   },
  //   [storyModal, update, onClose]
  // );

  // // TODO: error handler
  // // const { register, handleSubmit, errors } = useForm();
  // const { register, handleSubmit } = useForm();

  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>Resource</DialogTitle>
      <DialogContent dividers={true}>
        <div>Hello world</div>
        <button onClick={handleRemove}>remove</button>
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
