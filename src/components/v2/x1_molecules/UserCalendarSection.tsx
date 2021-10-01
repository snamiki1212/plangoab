import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { UserCalendar } from "@/components/v2/x1_molecules/UserCalendar";

// TODO: v1 to v2
import { useStoryModal } from "@/hooks/v1/useStoryModal";
import { useEventModal } from "@/hooks/v1/useEventModal";
import { StoryEditModal } from "@/components/v1/molecules/StoryEditModal";
import { EventEditModal } from "@/components/v1/molecules/EventEditModal";

export function UserCalendarSection() {
  const { pop: popStoryModal, isOpen: isOpenStoryModal } = useStoryModal();
  const { pop: popEventModal, isOpen: isOpenEventModal } = useEventModal();
  return (
    <>
      <Box style={{ height: "100vh" }}>
        <Paper elevation={8} style={{ height: "100%" }}>
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

const CalendarContainer = styled.div`
  padding: 1rem 1.5rem;
  height: 100%;
`;
