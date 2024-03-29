import styled from "styled-components";
import { LogoWithText } from "~/src/components/v1/molecules/LogoWithText";

export const EmptyApp = () => {
  return (
    <Container>
      <LogoWithText />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  align-content: center;
  justify-content: center;
`;
