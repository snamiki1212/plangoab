import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { LogoImage } from "../atoms/LogoImage";

export function LoadingPage() {
  return (
    <Container>
      <LogoContainer>
        <LogoImage />
      </LogoContainer>
      <div>
        <CircularProgress />
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  align-content: center;
`;

const LogoContainer = styled.div`
  width: 10rem;
  height: 10rem;
`;
