import styled from "styled-components";
import Image from "next/image";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

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
            <Button variant="contained" color="primary">
              Start Now
            </Button>
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
  color: var(--logo);
  font-family: var(--font-design1);
`;

const Text = styled.div`
  color: var(--base-dark1);
  font-family: var(--font-text1);

  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  padding: 10rem 0 10rem 0;
`;
