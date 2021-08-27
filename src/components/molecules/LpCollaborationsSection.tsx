import { collaborations } from "@/constants/collaborations";
import styled from "styled-components";
import Image from "next/image";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { LpHeroUnit } from "@/components/atoms/LpHeroUnit";

const TITLE = "Collaborations";
const SUBTITLE = "Plangoab is created with awesome collaborators.";

export function LpCollaborationsSection() {
  return (
    <Wrapper>
      <Container maxWidth="sm">
        <Inner>
          <LpHeroUnit title={TITLE} subtitle={SUBTITLE} />
          <LpCollaborationUnit />
        </Inner>
      </Container>
    </Wrapper>
  );
}

const LpCollaborationUnit = () => {
  return (
    <Grid container spacing={5} alignItems="flex-end">
      {collaborations.map((item) => (
        <Grid item key={item.name} xs={6} sm={6} md={6}>
          <Center>
            <img
              src={item.logo}
              alt={item.name}
              width={100}
              height={100}
              style={{ objectFit: "scale-down" }}
            />
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
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 10rem 0;
  background: linear-gradient(
    45deg,
    var(--color-lp-bg1),
    var(--color-light1) 30%,
    var(--color-lp-bg2)
  );
`;
