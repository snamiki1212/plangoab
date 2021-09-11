import { useEffect } from "react";
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

import dynamic from "next/dynamic";
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";

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

  useEffect(() => {
    const driver = new Driver({
      animate: false, // animate does not work. This reason is not exact. REF: https://github.com/kamranahmedse/driver.js/issues/31#issuecomment-386917275
    });
    driver.defineSteps([
      {
        element: ".driver__button",
        popover: {
          title: "Title on Popover",
          description: "Body of the popover",
          position: "right",
        },
      },
      {
        element: "#id2",
        popover: {
          title: "Title on Popover",
          description: "Body of the popover",
          position: "left",
        },
        onNext: () => {
          // Prevent moving to the next step
          driver.preventMove();
          // Perform some action or create the element to move to
          // And then move to that element
          setTimeout(() => {
            driver.moveNext();
          }, 4000);
        },
      },
      {
        element: "#third-element-introduction",
        popover: {
          title: "Title on Popover",
          description: "Body of the popover",
          position: "right",
        },
      },
    ]);
    driver.start();
  }, []);

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
            {renderHowTo && (
              <SButton onClick={openHowto} id="create-post">
                💡HowTo
              </SButton>
            )}
            {renderAbout && (
              <SButton onClick={openAbout} id="id2">
                ✈️About
              </SButton>
            )}
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
