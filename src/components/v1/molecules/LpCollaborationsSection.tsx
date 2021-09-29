import { COLLABORATIONS } from "@/constants/collaborations";
import styled from "styled-components";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { LpHeroUnit } from "@/components/v1/atoms/LpHeroUnit";
import { Animation1 } from "@/components/v1/atoms/Animation1";

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
      {COLLABORATIONS.map((item) => (
        <Grid item key={item.name} xs={6} sm={6} md={6}>
          <Center>
            <Animation1>
              <img
                src={item.logo}
                alt={item.name}
                width={100}
                height={100}
                style={{ objectFit: "scale-down" }}
              />
            </Animation1>
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
`;
