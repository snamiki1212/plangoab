import React from "react";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { useStepper } from "@/hooks/useStepper";

const steps = [
  {
    label: "Choose School Type",
    content: (
      <div>
        <div>
          <span>On 'Templates' card, choose school on Template section.</span>
          <ul>
            <li>Private college</li>
            <li>Public college</li>
          </ul>
        </div>
        <img
          src="/assets/demo_choose_school.gif"
          alt="chooseScool"
          style={{ width: "50%" }}
        />
      </div>
    ),
  },
  {
    label: "Click Copy button",
    content: (
      <div>
        <div>
          On 'Templates' card, Click [📝 Copy to my calendar] button on the
          section you want to use.
        </div>
        <br />
        <div>
          On 'My Calendar' card, the section your ordered to copy can display.
        </div>
        <br />
        <img
          src="/assets/demo_copy_story.gif"
          alt="CopyStory"
          style={{ width: "50%" }}
        />
      </div>
    ),
  },
  {
    label: "Edit your calendar",
    content: (
      <div>
        <div>On 'My Calendar' card, edit your plan.</div>
        <img
          src="/assets/demo_edit_calendar.gif"
          alt="Edit Calendar"
          style={{ width: "50%" }}
        />
      </div>
    ),
  },
  {
    label: "Done!",
    content: (
      <div>
        <div>Finished tutorial!</div>
        <div>Let's Enjoy✈️</div>
      </div>
    ),
  },
] as const;

export function TutorialModal() {
  const { activeStepIdx, isOpen, close, next, back } = useStepper();

  const isFirstStep = React.useMemo(() => activeStepIdx === 0, [activeStepIdx]);
  const isLastStep = React.useMemo(
    () => activeStepIdx === steps.length - 1,
    [activeStepIdx]
  );

  return (
    <Dialog open={isOpen} onClose={close} maxWidth="lg">
      <DialogTitle>
        <Title>How To Use</Title>
        <Stepper activeStep={activeStepIdx} alternativeLabel>
          {steps.map(({ label }) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </DialogTitle>
      <Divider />
      <DialogContent>
        <ContentContainer>{steps[activeStepIdx].content}</ContentContainer>
      </DialogContent>
      <Divider />
      <ButtonContainer>
        <div></div>
        <Button onClick={back} disabled={isFirstStep}>
          Back
        </Button>
        {isLastStep ? (
          <Button onClick={close} color="primary" variant="contained">
            Let's try!
          </Button>
        ) : (
          <Button onClick={next} color="primary" variant="contained">
            Next
          </Button>
        )}
        <Button onClick={close}>Close</Button>
      </ButtonContainer>
    </Dialog>
  );
}

const Title = styled.span`
  font-weight: 900;
  font-family: var(--font-header1);
  color: var(--color-dark1);
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr 1fr 0.3fr;
  gap: 1rem;
  margin: 1rem;
`;

const ContentContainer = styled.div`
  height: 70vh;
  width: 70vw;
  font-family: var(--font-text1);
  color: var(--color-dark1);
`;
