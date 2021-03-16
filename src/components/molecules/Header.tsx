import React from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";
import { AboutModal } from "../atoms/AboutModal";
import { LogoImage } from "../atoms/LogoImage";
import { AboutContent } from "./AboutContent";
import { useModal } from "../../hooks/useModal";
import { StepperModal } from "../templates/StepperModal";
import { useStepper } from "../../hooks/useStepper";

export function Header() {
  const {
    isOpen: isOpenAbout,
    open: openAbout,
    close: closeAbout,
  } = useModal();

  const { open } = useStepper();

  return (
    <>
      <AppBar position="static" style={{ background: "#fff", color: "#000" }}>
        <Toolbar>
          <div style={{ width: "50px", height: "50px" }}>
            <LogoImage />
          </div>
          <Title>Plangoab</Title>
          <ButtonContainer>
            <Button
              variant="contained"
              onClick={open}
              style={{ background: "white" }}
            >
              HowTo
            </Button>
            <Button
              variant="contained"
              onClick={openAbout}
              style={{ background: "white" }}
            >
              ✈️About Plangoab
            </Button>
          </ButtonContainer>
        </Toolbar>
      </AppBar>

      {/* Modal */}
      <AboutModal isOpen={isOpenAbout} onClose={closeAbout}>
        <AboutContent />
      </AboutModal>
      <StepperModal />
    </>
  );
}

const Title = styled.span`
  font-size: 2rem;
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  margin-left: auto;
`;
