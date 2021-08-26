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
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Title>Create your plan</Title>
            <li>
              <Text>Use template</Text>
            </li>
            <li>
              <Text>Save your plan</Text>
            </li>
          </Grid>
          <Grid item md={6}>
            <Image src="/assets/lp_calendar.png" width={680} height={382} />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

const Title = styled.div``;
const Text = styled.span``;

const Wrapper = styled.div`
  background: lightyellow;
  padding: 10rem 0;
`;
