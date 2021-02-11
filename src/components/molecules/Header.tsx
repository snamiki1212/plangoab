import React from "react";
import styled from "styled-components";

export function Header() {
  return (
    <Container>
      <Title>✈️Plangoab</Title>
    </Container>
  );
}

const Container = styled.div`
  height: 4rem;
  background: var(--main-color);
`;

const Title = styled.span`
  color: white;
  font-size: 3rem;
`;
