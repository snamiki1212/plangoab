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

export function AppHeader() {
  const {
    isOpen: isOpenAbout,
    open: openAbout,
    close: closeAbout,
  } = useModal();

  const { open } = useStepper();

  return (
    <>
      <AppBar
        position="static"
        style={{ background: "#fff", color: `var(--color-dark1)` }}
        elevation={0}
      >
        <Toolbar>
          <LogoImageContainer>
            <LogoImage />
          </LogoImageContainer>
          <Title>Plangoab</Title>
          <ButtonContainer>
            <SButton onClick={open}>💡HowTo</SButton>
            <SButton onClick={openAbout}>✈️About</SButton>
          </ButtonContainer>
        </Toolbar>
      </AppBar>

      {/* Modals */}
      <AboutModal isOpen={isOpenAbout} onClose={closeAbout} />
      <TutorialModal />
    </>
  );
}

const LogoImageContainer = styled.div`
  width: 50px;
  height: 50px;
`;

const Title = styled.span`
  font-size: 2rem;
  padding: 1rem;
  font-weight: 600;
  font-family: var(--font-design1);
  color: var(--color-logo);
`;

const ButtonContainer = styled.div`
  margin-left: auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
`;

const SButton = styled(Button)`
  && {
    text-transform: none;
    font-weight: 900;
    font-family: var(--font-header1);
  }
`;
