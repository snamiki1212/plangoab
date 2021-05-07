import React from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";
import { AboutModal } from "@/components/organisms/AboutModal";
import { LogoImage } from "@/components/atoms/LogoImage";
import { TutorialModal } from "@/components/organisms/TutorialModal";
import { useModal } from "@/hooks/useModal";
import { useStepper } from "@/hooks/useStepper";

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
      <AboutModal isOpen={isOpenAbout} onClose={closeAbout} />
      <TutorialModal />
    </>
  );
}

const Title = styled.span`
  font-size: 2rem;
  padding: 1rem;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  margin-left: auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
`;
