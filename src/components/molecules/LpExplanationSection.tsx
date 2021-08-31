import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";

export const LpExplanationSection = () => {
  return (
    <Wrapper>
      <Container maxWidth="md" component="div">
        <Inner>
          <Text>"We help you create plans to go abroad easily."</Text>
        </Inner>
      </Container>
    </Wrapper>
  );
};

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Wrapper = styled.div`
  padding: 10rem 0;
`;

const Text = styled.div`
  font-family: var(--font-text1);
  color: var(--color-dark1);
  font-size: 1.5rem;
  text-align: center;
`;
