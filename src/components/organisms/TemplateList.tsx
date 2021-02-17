import React from "react";
import styled from 'styled-components'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { TemplateCalendarContainer } from "../molecules/TemplateCalendarContainer";
import { useModal } from "../../hooks/useModal";

export function TemplateList() {
  const {
    open: openCommunityCollege,
    close: closeCommunityCollege,
    isOpen: isOpenCommunityCollege,
  } = useModal();

  return (
    <>
      <Card>
        <CardContent>
          <h2>Templates</h2>
          <ButtonsContainer>
            <Button variant="contained" onClick={openCommunityCollege}>Private College</Button>
            <Button disabled variant="contained">TODO: Public College</Button>
            <Button disabled variant="contained">TODO: ESL</Button>
          </ButtonsContainer>
        </CardContent>
      </Card>

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


const ButtonsContainer = styled.div`
  display: flex;
`