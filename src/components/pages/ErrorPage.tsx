import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { LogoImage } from "../atoms/LogoImage";
import { useResetAllData } from "../../hooks/useResetAllData";

export function ErrorPage() {
  const { reset } = useResetAllData();

  const handleResetAllData = React.useCallback(() => {
    if (!window.confirm("Would you remove all data in Plangoab?")) return;
    reset();
  }, [reset]);

  return (
    <Container>
      <LogoContainer>
        <LogoImage />
      </LogoContainer>
      <div>
        Sorry🐱
        <br />
        Something error happen.
        <br />
      </div>
      <div>
        <Button
          onClick={handleResetAllData}
          variant="contained"
          color="secondary"
        >
          Reset data
        </Button>
      </div>
    </Container>
  );
}

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
