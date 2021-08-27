import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { ROUTES } from "@/constants/routes";

export function LpHeroSection() {
  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            md={6}
            alignItems="center"
            justify="center"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <AppName>Plangoab</AppName>
            <Text>Make a success your planning</Text>
            <Link href={ROUTES.CALENDARS__NEW}>
              <a style={{ textDecoration: "none", color: "white" }}>
                <Button variant="contained" color="primary">
                  Start Now
                </Button>
              </a>
            </Link>
          </Grid>
          <Grid item md={6}>
            <Image src="/assets/airplane.png" width={680} height={382} />
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
