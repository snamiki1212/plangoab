import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import { useResetAllData } from "../../hooks/useResetAllData";
import { THIS_GITHUB_URL } from "../../constants/meta";
import { SNS_LIST } from "../../constants/sns";
import { collaborations } from "../../constants/collaborations";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function AboutModal({ isOpen, onClose }: PropsWithChildren<Props>) {
  return (
    <Dialog onClose={onClose} open={isOpen}>
      <DialogTitle>
        <MainTitle>✈️ Plangoab</MainTitle>
      </DialogTitle>
      <DialogContent dividers={true}>
        <AboutContent />
      </DialogContent>
    </Dialog>
  );
}

function AboutContent() {
  return (
    <ContentContainer>
      <AboutSection />
      <HowToUseSection />
      <TipsSection />
      <ResetSection />
      <HowToCaptureSection />
      <LicenseSection />
      <AuthorSection />
      <CollaborationsSection />
      <CodeSection />
    </ContentContainer>
  );
}

function Section({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div>
      <h2>{title}</h2>
      <div>{content}</div>
    </div>
  );
}

function AboutSection() {
  return (
    <Section
      title="🐱 About Planogoab"
      content={
        <p>
          A web calendar for a person going abroad. Generating a suitable
          schedule and customizable.
        </p>
      }
    />
  );
}

function HowToUseSection() {
  return (
    <Section
      title="📝 How To Use"
      content={
        <div>
          <p>
            There are two sections.
            <br />
            <li>1. My calendar</li>
            <li>2. Template calendars</li>
          </p>

          <br />

          <p>
            <h3>Instruction</h3>
            <li>
              1. Pick appropriate plan from a template calendar to click "Copy
              to my calendar".
            </li>
            <li>
              2. Stories are copied from a template calendar into my calendar.
            </li>
            <li>3. Edit my story and events in my calendar.</li>
          </p>
        </div>
      }
    />
  );
}

function TipsSection() {
  return (
    <Section
      title="🔑 Tips"
      content={
        <div>
          <li>Zoom in: [Command] + [-]</li>
          <li>Zoom out: [Command] + [+]</li>
        </div>
      }
    />
  );
}

function LicenseSection() {
  return (
    <Section
      title="📜 License"
      content={
        <div>
          <li>GPL-3.0</li>
        </div>
      }
    />
  );
}

function ResetSection() {
  const { reset } = useResetAllData();

  const handleResetAllData = React.useCallback(() => {
    if (!window.confirm("Would you remove all data in Plangoab?")) return;
    reset();
  }, [reset]);
  return (
    <Section
      title="💥 Reset All Data"
      content={
        <div>
          <div>
            <p>Would you like to reset all data in Plangoab?</p>
            <br />
            <Button
              onClick={handleResetAllData}
              variant="outlined"
              color="secondary"
            >
              RESET ALL DATA
            </Button>
          </div>
        </div>
      }
    />
  );
}
function AuthorSection() {
  return (
    <Section
      title="😎 Author"
      content={
        <div>
          {SNS_LIST.map(({ name, url }) => (
            <li>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </li>
          ))}
        </div>
      }
    />
  );
}

function CollaborationsSection() {
  return (
    <Section
      title="👨‍👦‍👦 Collaborations"
      content={
        <div>
          {collaborations.map(({ name, link }) => (
            <li>
              <a target="_blank" rel="noopener noreferrer" href={link}>
                {name}
              </a>
            </li>
          ))}
        </div>
      }
    />
  );
}

function CodeSection() {
  return (
    <Section
      title="🧑‍💻 Source Code"
      content={
        <div>
          <span>
            Plangoab is OSS managed at <a href={THIS_GITHUB_URL}>GitHub</a> so
            you can check all of code.
          </span>
        </div>
      }
    />
  );
}

const ContentContainer = styled.div`
  display: grid;
  gap: 2rem;
`;

const MainTitle = styled.span`
  font-weight: 900;
`;
