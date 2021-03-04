import React from "react";
import styled from "styled-components";
import { LogoImage } from "../atoms/LogoImage";

export function Footer() {
  return (
    <Container>
      <LogoImage />
      <AppName>Plangoab</AppName>
    </Container>
  );
}

const Container = styled.div`
  padding: 5rem;
  background: var(--main-color);

  display: flex;
  color: white;
  height: 6rem;
  min-height: 30vh;
`;

const AppName = styled.div`
  color: white;
  font-size: 3rem;
  padding: 1rem;
`;
