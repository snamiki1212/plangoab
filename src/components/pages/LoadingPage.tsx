import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

export function LoadingPage() {
  return (
    <Container>
        <div>
          <CircularProgress />
        </div>
        <span>- Loading -</span>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  align-content: center;
`;