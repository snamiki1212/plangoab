import React from "react";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";
import { AboutModal } from "../atoms/AboutModal";
import { LogoImage } from "../atoms/LogoImage";
import { AboutContent } from "./AboutContent";
import { useModal } from "../../hooks/useModal";

export function Header() {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <div style={{ width: "100px", height: "100px" }}>
            <LogoImage />
          </div>
          <Title>Plangoab</Title>
          <ButtonContainer>
            <Button variant="contained" onClick={open}>
              ✈️About Plangoab
            </Button>
          </ButtonContainer>
        </Toolbar>
      </AppBar>

      {/* Modal */}
      <AboutModal isOpen={isOpen} onClose={close}>
        <AboutContent />
      </AboutModal>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 6rem;
  background: var(--main-color);
  padding: 1rem;
`;

const Title = styled.span`
  color: white;
  font-size: 3rem;
  padding: 1rem;
`;

const ButtonContainer = styled.div`
  margin-left: auto;
`;
