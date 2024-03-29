import Link from "next/link";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { ROUTES } from "~/src/constants/routes";
import { Animation1 } from "~/src/components/v1/atoms/Animation1";

export function LpDemoSection() {
  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={6} sm={12}>
            <Animation1>
              <img
                src="/assets/lp_demo.gif"
                width={680}
                height={382}
                style={{ margin: "0 auto", objectFit: "scale-down" }}
              />
            </Animation1>
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            alignItems="center"
            justifyContent="center"
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
                <Link href={ROUTES.CALENDARS__NEW}>
                  <a style={{ textDecoration: "none" }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{
                        fontSize: "1.2rem",
                        fontFamily: "var(--font-design1)",
                      }}
                    >
                      Start Plangoab
                    </Button>
                  </a>
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
