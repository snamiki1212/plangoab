import React from "react";
import styled from "styled-components";
import Dialog from "@material-ui/core/Dialog";
import { UserCalendarContainer } from "../molecules/UserCalendarContainer";
import { TemplateCalendarContainer } from "../molecules/TemplateCalendarContainer";
import { useModal } from "../../hooks/useModal";

export function CalendarList() {
  const {
    open: openCommunityCollege,
    close: closeCommunityCollege,
    isOpen: isOpenCommunityCollege,
  } = useModal();

  return (
    <>
      <Container>
        <div>
          <h2>Templates</h2>
          <button onClick={openCommunityCollege}>Community College</button>
        </div>
        <hr />
        <div>
          <h2>User Calendar</h2>
          <UserCalendarContainer />
        </div>
      </Container>

      {/* Modal */}
      <Dialog
        fullScreen
        open={isOpenCommunityCollege}
        onClose={closeCommunityCollege}
      >
        <button onClick={closeCommunityCollege}>Close</button>
        <TemplateCalendarContainer />
      </Dialog>
    </>
  );
}

const Container = styled.div`
  display: grid;
  gap: 1rem;
`;
