import React from "react";
import styled from "styled-components";
import { LogoImage } from "../atoms/LogoImage";
import { CollaborationList } from "./CollaborationList";

export function Footer() {
  return (
    <Container>
      <Box>
        <LogoImage />
        <AppName>Plangoab</AppName>
      </Box>

      <Box>
        <div>
          <h3>Collcations</h3>
          <hr />
          <CollaborationList />
        </div>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
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
