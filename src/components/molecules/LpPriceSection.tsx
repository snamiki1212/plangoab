import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import { LpHeroUnit } from "@/components/atoms/LpHeroUnit";
import { LpPriceUnit } from "@/components/atoms/LpPriceUnit";

const TITLE = "Price";
const SUBTITLE = `Quickly build an effective pricing table for your potential customers with this layout. It&apos;s built with default Material-UI components with little customization.`;

export const LpPriceSection = () => {
  return (
    <Wrapper>
      <Container maxWidth="md" component="div">
        <Inner>
          <LpHeroUnit title={TITLE} subtitle={SUBTITLE} />
          <LpPriceUnit />
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
  background: linear-gradient(
    135deg,
    var(--color-lp-bg1),
    var(--color-light1) 30%,
    var(--color-lp-bg2)
  );
  padding: 10rem 0;
`;
