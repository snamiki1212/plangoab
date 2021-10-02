import Link from "next/link";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { ROUTES } from "~/src/constants/routes";
import { LogoWithText } from "~/src/components/v2/0b_molecules/LogoWithText";

// TODO: v1 to v2
import { AboutModal } from "~/src/components/v1/organisms/AboutModal";
import { TutorialModal } from "~/src/components/v1/organisms/TutorialModal";
import { useModal } from "~/src/hooks/v1/useModal";
import { useStepper } from "~/src/hooks/v1/useStepper";

type Props = {
  renderHowTo?: boolean;
  renderAbout?: boolean;
};

export function AppHeader({ renderAbout = true, renderHowTo = true }: Props) {
  const {
    isOpen: isOpenAbout,
    open: openAbout,
    close: closeAbout,
  } = useModal();

  const { open: openHowto } = useStepper();

  return (
    <>
      <Container>
        <Link href={ROUTES.HOME}>
          <a style={{ textDecoration: "none" }}>
            <LogoWithText />
          </a>
        </Link>
        <ButtonContainer>
          {renderHowTo && <SButton onClick={openHowto}>💡HowTo</SButton>}
          {renderAbout && <SButton onClick={openAbout}>✈️About</SButton>}
        </ButtonContainer>
      </Container>

      {/* Modals */}
      <AboutModal isOpen={isOpenAbout} onClose={closeAbout} />
      <TutorialModal />
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 2rem;
`;

const ButtonContainer = styled.div`
  margin-left: auto;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
`;

const SButton = styled(Button)`
  && {
    text-transform: none;
    font-weight: 900;
    font-family: var(--font-header1);
    padding: 0;
  }
`;
