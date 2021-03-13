import React from "react";
import styled from "styled-components";
import { LogoImage } from "../atoms/LogoImage";

export function Footer() {
  return (
    <Container>
      <Box>
        <LogoImage />
        <AppName>Plangoab</AppName>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  padding: 5rem;
  border: 1px solid lightgray;
  box-shadow: 0 -4px 4px lightgray;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
`;

const AppName = styled.div`
  font-size: 3rem;
  padding: 1rem;
`;
