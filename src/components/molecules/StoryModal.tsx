import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// 
import { selectStoryModal, selectStory } from "../../redux/ui/storyModal";
import { useStory } from "../../hooks/useStory";
import { useResource } from "../../hooks/useResource";
import { FIELD } from "../../constants/fullcalendar/settings";

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
  }, [createStory, calendarId]);

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
          <DialogTitleInner>
            <TextField
              inputRef={register}
              name="name"
              defaultValue={story.name}
              variant="outlined"
              label="Story Name"
            />
          </DialogTitleInner>
        </form>
      </DialogTitle>

      <DialogContent dividers={true}>
        <div>
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
                    Delete
                  </Button>
                </Fieldset>
              );
            })}
            <AddResourceButtonContainer>
              <Button
                onClick={handleAddResource}
                variant="outlined"
                color="primary"
              >
                + Add Resource
              </Button>
            </AddResourceButtonContainer>

            <UpdateButtonContainer>
              <Button type="submit" variant="contained" color="primary">
                Update
              </Button>
            </UpdateButtonContainer>
          </form>
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleRemoveStory}
          color="secondary"
          variant="contained"
        >
          Delete this story
        </Button>
        <Button onClick={handleNewStory} color="primary">
          Add New Story
        </Button>
      </DialogActions>
    </Dialog>
  );
}

const DialogTitleInner = styled.div`
  display: flex;
  align-items: center;
`;

const Fieldset = styled.fieldset`
  border: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid lightgray;
`;

const AddResourceButtonContainer = styled.div`
  padding: 1rem;
`;

const UpdateButtonContainer = styled.div`
  padding: 1rem;
  text-align: right;
`;
