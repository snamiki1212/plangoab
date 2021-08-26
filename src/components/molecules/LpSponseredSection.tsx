import { collaborations } from "@/constants/collaborations";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Image from "next/image";

import styled from "styled-components";

export function LpSponseredSection() {
  return (
    <Wrapper>
      <Container maxWidth="md">
        <Title>Collaborations</Title>
        <Grid container spacing={5} alignItems="flex-end">
          {collaborations.map((item) => (
            <Grid item key={item.name} xs={6} sm={6} md={6}>
              <Center>
                <Image
                  src={item.logo}
                  alt={item.name}
                  height={100}
                  width={100}
                />
              </Center>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}

const Title = styled.h2`
  text-align: center;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 3rem 0;
  background: lightblue;
`;
