import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import { useStoryModal } from "@/hooks/useStoryModal";
import { useEventModal } from "@/hooks/useEventModal";
import { StoryEditModal } from "@/components/molecules/StoryEditModal";
import { EventEditModal } from "@/components/molecules/EventEditModal";
import { UserCalendar } from "@/components/organisms/UserCalendar";

export function UserCalendarSection() {
  const { pop: popStoryModal, isOpen: isOpenStoryModal } = useStoryModal();
  const { pop: popEventModal, isOpen: isOpenEventModal } = useEventModal();
  return (
    <>
      <Box>
        <Paper elevation={8}>
          <PaperHeader>
            <Title>My Calendar</Title>
          </PaperHeader>
          <Divider />
          <CalendarContainer>
            <UserCalendar />
          </CalendarContainer>
        </Paper>
      </Box>

      {/* Modal */}
      <StoryEditModal isOpen={isOpenStoryModal} onClose={popStoryModal} />
      <EventEditModal isOpen={isOpenEventModal} onClose={popEventModal} />
    </>
  );
}

const Title = styled.span`
  font-size: 2rem;
  font-weight: 900;
  margin-right: 1rem;
`;

const PaperHeader = styled.div`
  padding: 1rem 1.5rem;
`;

const CalendarContainer = styled.div`
  padding: 1rem 1.5rem;
`;
