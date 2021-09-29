import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { LpHeroUnit } from "@/components/v1/atoms/LpHeroUnit";
import { SNS_LIST } from "@/constants/sns";

const TITLE = "Creater";
const SUBTITLE = "Created by Nash";

export function LpCreaterSection() {
  return (
    <Wrapper>
      <Container maxWidth="sm">
        <Inner>
          <LpHeroUnit title={TITLE} subtitle={SUBTITLE} />
          <Unit />
        </Inner>
      </Container>
    </Wrapper>
  );
}

const Unit = () => {
  return (
    <Grid container spacing={10} alignItems="center" justifyContent="center">
      {SNS_LIST.map(({ name, url }) => (
        <Grid item key={name} xs={6} sm={3} md={3}>
          <Center>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <IconSquare>{name}</IconSquare>
            </a>
          </Center>
        </Grid>
      ))}
    </Grid>
  );
};

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin: 0 2rem;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 10rem 0;
`;

const IconSquare = styled.div`
  width: 6rem;
  height: 6rem;
  display: grid;
  place-items: center;
  border-radius: 50%;

  /* Text */
  font-size: 0.8rem;
  font-family: var(--font-text1);
  color: var(--color-light1);
  font-weight: 900;

  /* Animation */
  background: var(--color-dark1);
  transition: 1s;
  &:hover {
    transition: 0.5s;
    background: var(--color-light1);
    color: var(--color-dark1);
    transform: scale(1.2);
  }
`;
