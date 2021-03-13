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
  border: 1px solid lightgray;
  box-shadow: 0 -4px 4px lightgray;
  display: flex;
  height: 3rem;
  min-height: 30vh;
`;

const AppName = styled.div`
  font-size: 3rem;
  padding: 1rem;
`;
