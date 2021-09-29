import Link from "next/link";
import styled from "styled-components";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { AboutModal } from "@/components/v1/organisms/AboutModal";
import { TutorialModal } from "@/components/v1/organisms/TutorialModal";
import { LogoWithText } from "@/components/v1/molecules/LogoWithText";
import { useModal } from "@/hooks/v1/useModal";
import { useStepper } from "@/hooks/v1/useStepper";
import { ROUTES } from "@/constants/routes";

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
      <AppBar
        position="static"
        style={{ background: "#fff", color: `var(--color-dark1)` }}
        elevation={0}
      >
        <Toolbar>
          <Link href={ROUTES.HOME}>
            <a style={{ textDecoration: "none" }}>
              <LogoWithText />
            </a>
          </Link>
          <ButtonContainer>
            {renderHowTo && <SButton onClick={openHowto}>💡HowTo</SButton>}
            {renderAbout && <SButton onClick={openAbout}>✈️About</SButton>}
          </ButtonContainer>
        </Toolbar>
      </AppBar>

      {/* Modals */}
      <AboutModal isOpen={isOpenAbout} onClose={closeAbout} />
      <TutorialModal />
    </>
  );
}

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
  }
`;
