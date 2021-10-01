import { useCallback } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  useSelectedTab,
  useSelectTabOfStoryId,
} from "@/hooks/v2/useSelectedTab";
import { BaseStory } from "@/core/v1/story/BaseStory";
import { CalendarTab } from "@/components/v2/x0_atoms/CalendarTab";

// TODO: v1 to v2
import { useStoryModal } from "@/hooks/v1/useStoryModal";
import { useStory } from "@/hooks/v1/useStory";

const useHandleEdit = (story: BaseStory) => {
  const { push: pushStoryModal } = useStoryModal();
  const storyId = story.id;
  const calendarId = story.calendarId;
  const openStoryModal = useCallback(() => {
    pushStoryModal({ calendarId, storyId });
  }, [pushStoryModal, calendarId, storyId]);
  return openStoryModal;
};

const useHandleDelete = (story: BaseStory) => {
  const { remove: removeStory } = useStory();

  const handleRemoveStory = useCallback(() => {
    if (!story) {
      return console.warn("Invalid data status when to update resource.");
    }
    removeStory({ storyId: story.id, calendarId: story.calendarId });
  }, [removeStory]);

  return handleRemoveStory;
};

type Props = { story: BaseStory };

export const UserCalendarTab: React.VFC<Props> = ({ story }) => {
  const selectTab = useSelectedTab();

  const selectedStoryId = useSelectTabOfStoryId();

  const selected = story.id === selectedStoryId;

  const onSelectTab = useCallback(
    () => selectTab(story.id),
    [selectTab, story]
  );

  const onClickEdit = useHandleEdit(story);

  const onClickDelete = useHandleDelete(story);

  return (
    <Container>
      <CalendarTab
        title={
          <Inner>
            {story.name}
            <Flex>
              <Icon onClick={onClickEdit}>📝</Icon>
              <Icon onClick={onClickDelete}>×</Icon>
            </Flex>
          </Inner>
        }
        selected={selected}
        onClick={onSelectTab}
      />
    </Container>
  );
};

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.4rem;
`;

const Inner = styled(Flex)`
  justify-content: space-between;
  gap: 1rem;
`;

const Icon = styled.div`
  font-size: 1rem;
  font-weight: 200;
  border-radius: 100%;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    background-color: lightgray;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
