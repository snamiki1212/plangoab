import React from "react";
import styled from "styled-components";
import { LogoImage } from "../atoms/LogoImage";

export function Footer() {
  return (
    <Container>
      <LogoText>
        <LogoImageContainer>
          <LogoImage />
        </LogoImageContainer>
        <span>Plangoab</span>
      </LogoText>
    </Container>
  );
}

const Container = styled.div`
  padding: 5rem;
  min-height: 30vh;
  background: var(--main-color);
  color: white;
`;

const LogoImageContainer = styled.div`
  height: 4rem;
  width: 4rem;
`;

const LogoText = styled.div`
  display: flex;
  color: white;
  font-size: 4rem;
`;
