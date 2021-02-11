import React from "react";
import styled from "styled-components";

export function Footer() {
  return (
    <Wrapper>
      <LogoText>✈️Plangoab</LogoText>
      <a
        href="https://github.com/snamiki1212/canada-immigration-scheduler"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 5rem;
  min-height: 30vh;
  background: var(--main-color);
  color: white;
`;

const LogoText = styled.div`
  color: white;
  font-size: 4rem;
` 