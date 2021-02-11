import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { AboutModal } from "../atoms/AboutModal";

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
        <Title>Plangoab</Title>
        <Button onClick={handleClick}>About Plangoab</Button>
      </Container>
      <AboutModal isOpen={isOpen} onClose={handleClose} />

      {/*  */}
    </>
  );
}

const Container = styled.div`
  height: 4rem;
  background: var(--main-color);
`;

const Title = styled.span`
  color: white;
  font-size: 3rem;
`;
