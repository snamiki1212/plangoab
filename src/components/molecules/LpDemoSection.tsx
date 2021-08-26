import styled from "styled-components";
import Image from "next/image";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export function LpDemoSection() {
  return (
    <Wrapper>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            md={6}
            alignItems="center"
            justify="center"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Title>Create your plan</Title>
            <TextContainer>
              <Text>✔️ Create your plan</Text>
              <Text>✔️ Use template</Text>
              <Text>👑 Save your plan</Text>
            </TextContainer>
          </Grid>
          <Grid item md={6}>
            <Image src="/assets/lp_calendar.png" width={680} height={382} />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

const Title = styled.div`
  font-family: var(--font-header1);
  font-size: 2.5rem;
  color: var(--base-dark1);
  font-weight: 900;
  text-align: center;
  /*  */
  margin-bottom: 2rem;
`;

const Text = styled.span`
  font-family: var(--font-text1);
  font-size: 1.3rem;
  color: var(--base-dark1);
  font-weight: 700;

  margin-left: 1rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Wrapper = styled.div`
  background: lightyellow;
  padding: 10rem 0;
`;
