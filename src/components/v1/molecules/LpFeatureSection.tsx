import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Animation1 } from "~/src/components/v1/atoms/Animation1";

export function LpFeatureSection() {
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
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Title>Features</Title>
            <TextContainer>
              <Text>👑 Create your plan</Text>
              <Text>👑 Use template</Text>
              <Text>👑 Save your plan</Text>
            </TextContainer>
          </Grid>
          <Grid item md={6} sm={12}>
            <Animation1>
              <img
                src="/assets/lp_calendar.png"
                width={680}
                height={382}
                style={{ margin: "0 auto", objectFit: "scale-down" }}
              />
            </Animation1>
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
