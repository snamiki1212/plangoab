import Link from "next/link";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { ROUTES } from "@/constants/routes";

export function LpDemoSection() {
  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={6} sm={12}>
            <img
              src="/assets/lp_demo.gif"
              width={680}
              height={382}
              style={{ margin: "0 auto", objectFit: "scale-down" }}
            />
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            alignItems="center"
            justify="center"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Title>Demo</Title>
            <TextContainer>
              <Text>Create your plan!</Text>
              <Text>
                <Link href={ROUTES.DEPRECATED_CALENDARS__NEW}>
                  <a style={{ textDecoration: "none" }}>👉 Start Plangoab</a>
                </Link>
              </Text>
            </TextContainer>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

const Title = styled.div`
  font-family: var(--font-header1);
  font-size: 2.5rem;
  color: var(--color-dark1);
  font-weight: 900;
  text-align: center;
  /*  */
  margin-bottom: 2rem;
`;

const Text = styled.span`
  font-family: var(--font-text1);
  font-size: 1.3rem;
  color: var(--color-dark1);
  /*  */
  margin-left: 1rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Wrapper = styled.div`
  padding: 10rem 0;
`;
