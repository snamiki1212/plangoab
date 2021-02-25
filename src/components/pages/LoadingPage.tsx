import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { LogoImage } from "../atoms/LogoImage";

export function LoadingPage() {
  return (
    <Container>
      <AppName />
      <LogoContainer>
        <LogoImage />
      </LogoContainer>
      <div>
        <CircularProgress />
      </div>
    </Container>
  );
}

const AppName = () => <h2>Plangoab</h2>;

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 2rem;
`;

const LogoContainer = styled.div`
  width: 10rem;
  height: 10rem;
`;
