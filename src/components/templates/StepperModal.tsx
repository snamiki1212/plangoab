import React from "react";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import GIF_ChooseScool from "../../assets/choose_school.gif";
import GIF_CopyStory from "../../assets/copy_story.gif";
import GIF_EditCalendar from "../../assets/edit_calendar.gif";
import { useStepper } from "../../hooks/useStepper";

const steps = [
  {
    label: "Choose School Type",
    content: (
      <div>
        <div>Choose Scool!</div>
        <img src={GIF_ChooseScool} alt="chooseScool" />
      </div>
    ),
  },
  {
    label: "Click Copy button",
    content: (
      <div>
        <div>Click [copy] Button and then check your calendar!</div>
        <img src={GIF_CopyStory} alt="CopyStory" />
      </div>
    ),
  },
  {
    label: "Edit your calendar",
    content: (
      <div>
        <div>Edit your plan!</div>
        <img src={GIF_EditCalendar} alt="Edit Calendar" />
      </div>
    ),
  },
  {
    label: "Done!",
    content: (
      <div>
        You finish tutorial!
        <br />
        Let's Enjoy✈️
      </div>
    ),
  },
] as const;

export function StepperModal() {
  const { activeStepIdx, isOpen, close, next, back } = useStepper();

  const isFirstStep = React.useMemo(() => activeStepIdx === 0, [activeStepIdx]);
  const isLastStep = React.useMemo(() => activeStepIdx === steps.length - 1, [
    activeStepIdx,
  ]);

  return (
    <Dialog open={isOpen} onClose={close}>
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
`;
