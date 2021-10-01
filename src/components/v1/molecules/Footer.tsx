import Link from "next/link";
import styled from "styled-components";
import { CollaborationsSection } from "~/src/components/v1/molecules/CollaborationsSection";
import { LogoWithText } from "~/src/components/v1/molecules/LogoWithText";
import { ROUTES } from "~/src/constants/routes";

export function Footer() {
  return (
    <Container>
      <Box>
        <Link href={ROUTES.HOME}>
          <a style={{ textDecoration: "none" }}>
            <LogoWithText />
          </a>
        </Link>
      </Box>

      <Box>
        <div>
          <Title>Collaboration</Title>
          <hr />
          <CollaborationsSection />
        </div>
      </Box>
    </Container>
  );
}
const Title = styled.h3`
  font-weight: 900;
  font-family: var(--font-header1);
  color: var(--color-dark1);
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5rem;
  border: 1px solid lightgray;
  /* box-shadow: 0 -4px 4px lightgray; */
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
`;

const AppName = styled.div`
  font-size: 3rem;
  padding: 1rem;
  font-weight: 900;
  font-family: var(--font-design1);
  color: var(--color-logo);
`;
