import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { LogoImage } from "~/src/components/v1/atoms/LogoImage";
import { useResetAllData } from "~/src/hooks/v1/useResetAllData";

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
        Something Error Happened🙀
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
        <div>Reset and plese reload.</div>
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
