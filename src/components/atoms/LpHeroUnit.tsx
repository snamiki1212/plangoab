import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";

type Props = {
  title: string;
  subtitle?: string;
};

export const LpHeroUnit: React.VFC<Props> = ({ title, subtitle = "" }) => {
  return (
    <Container maxWidth="sm" component="main">
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

const Title = styled.div`
  font-family: var(--font-header1);
  font-size: 3rem;
  color: var(--base-dark1);
  font-weight: 900;
  text-align: center;
`;

const Subtitle = styled.div`
  font-family: var(--font-header1);
  font-size: 1.5rem;
  /* color: var(--base-dark1); */
  color: gray;
  font-weight: 900;
  text-align: center;
`;
