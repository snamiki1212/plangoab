import styled, { css } from "styled-components";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { ROUTES } from "~/src/constants/routes";

export function LpHeroSection() {
  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            md={6}
            sm={12}
            alignItems="center"
            justifyContent="center"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <AppName>Plangoab</AppName>
            <Text>Make a success your planning</Text>
            <Link href={ROUTES.DEPRECATED_CALENDARS__NEW}>
              <a style={{ textDecoration: "none", color: "white" }}>
                <Button variant="contained" color="primary">
                  Start Now
                </Button>
              </a>
            </Link>
          </Grid>
          <Grid item md={6} sm={12}>
            <img
              src="/assets/airplane.png"
              width={680}
              height={382}
              style={{ margin: "0 auto", objectFit: "scale-down" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

const AppName = styled.div`
  color: var(--color-logo);
  font-family: var(--font-design1);
  font-size: 4rem;
`;

const Text = styled.div`
  color: var(--color-dark1);
  font-family: var(--font-text1);
  font-size: 2rem;
  text-align: center;

  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  padding: 10rem 0 10rem 0;
`;
