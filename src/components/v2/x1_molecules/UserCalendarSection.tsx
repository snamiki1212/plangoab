import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { UserCalendar } from "~/src/components/v2/x1_molecules/UserCalendar";
import { UserCalendarTabSection } from "~/src/components/v2/x1_molecules/UserCalendarTabSection";

// TODO: v1 to v2
import { useStoryModal } from "~/src/hooks/v1/useStoryModal";
import { useEventModal } from "~/src/hooks/v1/useEventModal";
import { StoryEditModal } from "~/src/components/v1/molecules/StoryEditModal";
import { EventEditModal } from "~/src/components/v1/molecules/EventEditModal";

export function UserCalendarSection() {
  const { pop: popStoryModal, isOpen: isOpenStoryModal } = useStoryModal();
  const { pop: popEventModal, isOpen: isOpenEventModal } = useEventModal();
  return (
    <>
      <Box style={{ height: "90vh" }}>
        <CalendarContainer>
          <UserCalendarTabSection />
          <UserCalendar />
        </CalendarContainer>
      </Box>

      {/* Modal */}
      <StoryEditModal isOpen={isOpenStoryModal} onClose={popStoryModal} />
      <EventEditModal isOpen={isOpenEventModal} onClose={popEventModal} />
    </>
  );
}

const CalendarContainer = styled.div`
  height: 100%;
`;
