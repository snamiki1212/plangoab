import React from "react";
import styled from "styled-components";
import Container from "@mui/material/Container";
import { LpHeroUnit } from "@/components/v1/atoms/LpHeroUnit";
import { LpPriceUnit } from "@/components/v1/atoms/LpPriceUnit";

const TITLE = "Price";
const SUBTITLE = ``;

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
  padding: 10rem 0;
`;
