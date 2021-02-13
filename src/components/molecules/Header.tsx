import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { AboutModal } from "../atoms/AboutModal";
import { LogoImage } from "../atoms/LogoImage";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    console.log("handle click");
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Container>
        <LogoImage />
        <Title>Plangoab</Title>
        <ButtonContainer>
          <Button onClick={handleClick}>About Plangoab</Button>
        </ButtonContainer>
      </Container>

      {/* Modal */}
      <AboutModal isOpen={isOpen} onClose={handleClose} />
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
`
