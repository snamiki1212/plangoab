import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
//
import { selectStoryModal, selectStory } from "~/src/redux/v1/ui/storyModal";
import { useStory } from "~/src/hooks/v1/useStory";
import { useResource } from "~/src/hooks/v1/useResource";
import { FIELD } from "~/src/constants/fullcalendar";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function StoryEditModal({ isOpen, onClose }: Props) {
  const storyModal = useSelector(selectStoryModal);
  const story = useSelector(selectStory);
  const { register, handleSubmit } = useForm();
  const { remove: removeStory, update: updateStory } = useStory();
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

  if (!story) return <></>;

  return (
    <Dialog
      onClose={onClose}
      open={isOpen}
      scroll="paper"
      fullWidth={true}
      maxWidth="lg"
    >
      <DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitleInner>
            <STextField
              inputRef={register}
              name="name"
              defaultValue={story.name}
              variant="outlined"
              label="Story Name"
            />
          </DialogTitleInner>
        </form>
      </DialogTitle>

      <DialogContent dividers={true} style={{ padding: "3rem" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          {story.resources.map((resource, idx) => {
            const fieldName = `resources[${idx}]`;
            return (
              <Fieldset name={fieldName} key={fieldName}>
                <input
                  type="hidden"
                  name={`${fieldName}.id`}
                  ref={register}
                  value={resource.id}
                />
                <TextField
                  defaultValue={resource[FIELD]}
                  inputRef={register}
                  name={`${fieldName}.${FIELD}`}
                  label="Field"
                />
                <Button
                  onClick={handleRemoveResource(resource.id)}
                  color="secondary"
                  variant="contained"
                >
                  🗑 Remove
                </Button>
              </Fieldset>
            );
          })}
        </form>
        <SButton onClick={handleAddResource} variant="outlined" color="primary">
          + Add Row
        </SButton>
      </DialogContent>

      <DialogActions>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </form>
        <Button
          onClick={handleRemoveStory}
          color="secondary"
          variant="contained"
        >
          🗑 Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const DialogTitleInner = styled.div`
  display: flex;
  align-items: center;
`;

const STextField = styled(TextField)`
  width: 50%;
`;

const Fieldset = styled.fieldset`
  border: none;
  display: grid;
  grid-template-columns: 2fr 0.5fr;
  gap: 1rem;
  padding: 1rem 0;
  margin: 1rem 0;
`;

const SButton = styled(Button)`
  width: 100%;
`;
