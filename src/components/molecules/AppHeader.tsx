import Link from "next/link";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { AboutModal } from "@/components/organisms/AboutModal";
import { TutorialModal } from "@/components/organisms/TutorialModal";
import { LogoWithText } from "@/components/molecules/LogoWithText";
import { useModal } from "@/hooks/useModal";
import { useStepper } from "@/hooks/useStepper";
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

  const { open } = useStepper();

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
            {renderHowTo && <SButton onClick={open}>💡HowTo</SButton>}
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
