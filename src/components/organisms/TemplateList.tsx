import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { PrivateCollegeTemplate } from "../molecules/PrivateCollegeTemplate";
import { useModal } from "../../hooks/useModal";
import { TemplateOptionCard } from '../molecules/TemplateOptionCard'
import { ProfileCard } from './ProfileCard'

export function TemplateList() {
  const {
    open: openPrivateCollege,
    close: closePrivateCollege,
    isOpen: isOpenPrivateCollege,
  } = useModal();

  return (
    <>
      <Card>
        <CardContent>
          <h2>Templates</h2>
          <ButtonsContainer>
            <Button variant="contained" onClick={openPrivateCollege}>
              Private College
            </Button>
            <Button disabled variant="contained">
              TODO: Public College
            </Button>
            <Button disabled variant="contained">
              TODO: ESL
            </Button>
          </ButtonsContainer>
          <TemplateOptionCard />
        </CardContent>
      </Card>

      {/* Modal */}
      <Dialog
        fullScreen
        open={isOpenPrivateCollege}
        onClose={closePrivateCollege}
      >
        <ModalInnerContainer>
          <button onClick={closePrivateCollege}>Close</button>
          <ModalInnerController>
            <ProfileCard />
            <TemplateOptionCard />
          </ModalInnerController>
          <PrivateCollegeTemplate />
        </ModalInnerContainer>
      </Dialog>
    </>
  );
}

const ButtonsContainer = styled.div`
  display: flex;
`;

const ModalInnerContainer = styled.div`
  display: grid;
  gap: 2rem;
  padding: 3rem;
`;

const ModalInnerController = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`
