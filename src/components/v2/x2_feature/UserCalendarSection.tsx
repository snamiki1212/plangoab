import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { useStoryModal } from "@/hooks/v1/useStoryModal";
import { useEventModal } from "@/hooks/v1/useEventModal";
import { StoryEditModal } from "@/components/v1/molecules/StoryEditModal";
import { EventEditModal } from "@/components/v1/molecules/EventEditModal";
import { UserCalendar } from "@/components/v2/x2_feature/UserCalendar";

export function UserCalendarSection() {
  const { pop: popStoryModal, isOpen: isOpenStoryModal } = useStoryModal();
  const { pop: popEventModal, isOpen: isOpenEventModal } = useEventModal();
  return (
    <>
      <Box>
        <Paper elevation={8}>
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
  font-family: var(--font-header1);
  color: var(--color-dark1);
`;

const PaperHeader = styled.div`
  padding: 1rem 1.5rem;
`;

const CalendarContainer = styled.div`
  padding: 1rem 1.5rem;
`;
